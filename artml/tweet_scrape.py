from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import pandas as pd

# this file is generated entirely by chatgpt


# Start Selenium WebDriver
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")  # Maximize browser window
driver = webdriver.Chrome(options=options)

# Step 1: Open Twitter Login Page
driver.get("https://twitter.com/login")
print("Log in manually now. You have 45 seconds.")
time.sleep(45)  # Gives you time to log in

# Step 2: Verify Successful Login
if "login" in driver.current_url:
    print("Login failed or took too long. Please try again.")
    driver.quit()
    exit()
else:
    print("Login successful! Proceeding to scrape tweets.")

# Step 3: Navigate to Twitter Search
search_query = "Election2024 OR '2024 election'"
search_url = f"https://twitter.com/search?q={search_query}&src=typed_query"
driver.get(search_url)
time.sleep(5)  # Allow page to load

# Step 4: Switch to 'Latest' Tweets Tab
try:
    latest_tab = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.LINK_TEXT, "Latest"))
    )
    latest_tab.click()
    time.sleep(5)
    print("Now scraping tweets from 'Latest' tab.")
except:
    print("Could not find 'Latest' tab. Using default search results.")

# Step 5: Scrape Tweets
def get_tweets():
    """Extracts tweet text from the current page, avoiding stale elements."""
    tweets = driver.find_elements(By.XPATH, "//article[@data-testid='tweet']")
    tweet_texts = []
    
    for tweet in tweets:
        try:
            tweet_texts.append(tweet.text)
        except:
            continue  # If an element is stale, skip it
    
    return tweet_texts

# Collect Tweets by Scrolling Down
all_tweets = set()

for _ in range(500):  # Scroll 10 times
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(3)  # Allow tweets to load

    tweets = get_tweets()  # Re-fetch tweets after scrolling
    all_tweets.update(tweets)  # Store unique tweets

# Step 6: Save Tweets to CSV
df = pd.DataFrame(list(all_tweets), columns=["Tweet Text"])
df.to_csv("election2024_tweets_02.csv", index=False)
print(f"Scraped {len(all_tweets)} tweets and saved them successfully.")

# Close Browser
driver.quit()