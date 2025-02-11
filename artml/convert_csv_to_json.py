import pandas as pd
import json

# Load your tweets dataset
df = pd.read_csv("./election2024_tweets_02.csv")

# Convert to OpenAI JSONL format
jsonl_data = []
for tweet in df["Tweet Text"].dropna():
    jsonl_data.append({
        "messages": [
            {"role": "system", "content": "You are an AI generating tweets about the 2024 election."},
            {"role": "user", "content": "Generate a tweet."},
            {"role": "assistant", "content": tweet}
        ]
    })

# Save as JSONL file
with open("fine_tune_tweets.jsonl", "w") as f:
    for entry in jsonl_data:
        f.write(json.dumps(entry) + "\n")

print("Data saved as fine_tune_tweets.jsonl")