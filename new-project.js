// hehe four letters
// palette: https://pin.it/7wWASjM
// comment: this is so freaking inefficent istg this is me brute forcing it brain not working great rn


// sources: https://gist.github.com/collegeman/79bd777c6747c08237d0
let data = [  
  'ache','arch','aver','avow','bach','back','bade','bail','bait','bake','bale', 'balk','ball','band','bang',
  'bank','barb','bard','bare','barf','bark','base','bash','bask','bate','bawl','bead','beam','bean','bear','beat','beef','been','beep','bell','belt','bend','bent','bias','bide','biff','bike','bilk','bill','bind','bird',
  'birr','bite','blab','blat','bled','blew','blob','blot','blow','blub','blue','blur','boat','bode','body','boil','bolt','bomb','bond','bone','bong','bonk','book','boom','boot','bore','born','boss','bowl','brag','bray',
  'bred','brew','brim','buck','buff','bulk','bull','bump','bung','bunk','bunt','buoy','burl','burn','burp','burr','bury','bush','busk','buss','bust','busy','butt','buzz','caca','cage','cake','calk','call','calm','came','camp',
  'cane','cant','card','care','cart','case','cash','cast','cave','cede','cere','chap','char','chat','chaw','chid','chin','chip','chop','chug','chum','cite','clad','clam','clap','claw','clew','clip','clog','clop','clot','cloy',
  'club','clue','coal','coat','coax','cock','code','coil','crap', 'coin','coke','comb','come','comp','cone','conk','cook','cool','coop','cope','copy','cord','core','cork','corn','cost','cowl','crab','cram','crap','crew',
  'crib','crop','crow','cube','cuff','cull','curb','cure','curl','cuss','dado','damn','damp','dang','dare','darn','dart','dash','date','daub','dawn','daze','deal','deck','deed','deem','defy','demo','dent','deny','dial',
  'dice','died','diet','dike','dine','ding','disc','dish','disk','diss','dive','dock','doff','dole','done','doom','dope','doss','dote','dove','down','doze','drag','draw','drew','drip','drop','drub','drug','drum','duck','duel',
  'dull','dump','dung','dunk','dupe','dusk','dust','earn','ease','echo','edge','edit','emit','envy','espy','etch','even','exit','face','fade','fail','fake','fall','fare','farm','fart','fast','fate','fawn','faze','fear','feed',
  'feel','fell','felt','fend','fess','fete','feud','file','fill','film','find','fine','fink','fire','firm','fish','fist','fizz','flag','flap','flat','flaw','flay','fled','flee','flew','flex','flip','flit','flog','flop','flow',
  'flub','flux','foal','foam','foil','fold','fond','fool','foot','ford','fork','form','foul','fowl','frap','fray','free','fret','frit','fuck','fuel','full','fume','fund','funk','furl','fuse','fuss','futz','gain','gait','gall',
  'game','gang','gaol','gape','garb','gash','gasp','gate','gave','gawk','gawp','gaze','gear','geld','gibe','gift','gild','gimp','gird','give','glom','glow','glue','glug','glut','gnaw','goad','golf','gone','gong','goof','gore',
  'gown','grab','gray','grew','grey','grid','grin','grip','grit','grow','grub','gull','gulp','gush','gust','gybe','hack','hail','hale','halt','hand','hang','hare','hark','harm','harp','hash','hasp','hast','hate','hath','haul',
  'have','hawk','haze','head','heal','heap','hear','heat','heed','heel','hell','heft','held','helm','help','herd','hewn','hide','hike','hill','hint','hire','hiss','hive','hoax','hock','hold','hole','home','hone','honk','hood','hoof',
  'hook','hoop','hoot','hope','horn','hose','host','hove','howl','huff','hulk','hull','hump','hung','hunt','hurl','hurt','hush','husk','hymn','hype','idle','inch','iron','itch','jack','jade','jail','jape','jazz','jeer','jell',
  'jerk','jest','jibe','jilt','jinx','jive','join','joke','jolt','josh','juke','jump','junk','kayo','keel','keen','keep','kept','kern','kick','kill','kink','kiss','kite','knap','knew','knit','knot','know','lace','lack','laid',
  'lain','lamb','lame','land','lard','lark','lash','last','laud','lave','laze','lead','leaf','leak','lean','leap','leer','left','lend','lent','levy','lick','lift','like','lilt','lime','limp','line','link','lisp','list','live',
  'load','loaf','loan','lock','loft','loll','long','look','loom','loop','loot','lope','lord','lose','lost','lour','love','lube','luck','luff','luge','lull','lump','lure','lurk','lust','made','mail','maim','make','mark','mask',
  'mate','maul','meet','meld','melt','mend','meow','mess','miff','milk','mime','mind','mine','miss','moan','mock','moor','moot','mope','move','muck','muff','muse','mush','must','mute','nail','name','near','neck','need','nest',
  'nick','nock','nose','note','nuke','numb','obey','ogle','okay','omen','omit','ooze','open','oust','pace','pack','page','pain','pair','palm','pant','pare','park','part','pass','pave','pawn','peak','peal','peck','peek','peel',
  'peep','peer','perk','pick','pile','pine','plan','plat','play','plod','plop','plot','plow','plug','pock','poke','pool','pore','pose','post','pour','pout','pray','prim','prod','prop','puff','pull','pulp','pump','purl','purr',
  'push','putt','quip','quit','quiz','race','rage','raid','rain','rake','rang','rank','rant','rape','rate','raze','read','ream','reap','reef','reek','reel','rein','rely','rend','rent','rest','rice','ride','rile','ring','riot',
  'rise','risk','rive','roam','roar','rock','rode','roil','roll','romp','roof','room','root','rope','rout','rove','ruin','rule','rush','rust','sack','said','sail','sale','salt','sass','sate','save','sawn','scab','scam','scan',
  'scar','scat','scud','scum','seal','seam','seat','seed','seek','seem','seen','seep','sell','send','sent','sewn','shag','sham','shed','ship','shit','shoe','shoo','shop','shot','show','shun','shut','side','sift','sigh','sign',
  'sing','sink','sire','site','size','skew','skid','skim','skin','skip','slab','slag','slam','slap','slat','slay','sled','slew','slid','slim','slip','slit','slog','slop','slot','slow','slue','slug','slum','slur','smut','snag',
  'snap','snip','snow','snub','soak','soap','soar','sock','soil','sold','sole','solo','sort','sour','sown','spam','span','spar','spat','spay','sped','spew','spin','spit','spot','spud','spur','stab','stag','star','stay','stem',
  'step','stet','stew','stir','stop','stow','stub','stud','stun','suck','suit','sulk','sung','sunk','surf','swab','swam','swap','swat','sway','swig','swim','swob','swot','swum','tack','tail','talc','talk','tame','tamp','tank',
  'tape','task','taxi','team','tear','teem','tell','tend','tent','term','test','text','thaw','thin','thud','tick','tide','tile','tilt','time','ting','tint','tire','toil','told','toll','tone','took','tool','toot','tope','tore',
  'torn','toss','tote','tour','tout','tram','trap','tree','trek','trim','trip','trod','trot','true','tube','tuck','tune','turf','turn','tusk','twin','twit','type','undo','urge','vamp','vary','veer','veil','vein','vend','vent',
  'vest','veto','vide','view','visa','vise','void','vote','wade','waft','wage','wail','wait','wake','walk','wall','wane','want','ward','warm','warn','warp','wash','waul','wave','wawl','wean','wear','weed','weep','weld','well',
  'welt','wend','went','wept','were','wham','whap','whet','whip','whir','whiz','whop','will','wilt','wine','wink','wipe','wire','wish','wist','wive','woke','wolf','woof','word','wore','work','worm','worn','wove','wrap',
  'writ','xray','yack','yank','yarn','yaup','yawn','yawp','yean','yell','yelp','yoke','yowl','zero','zest','zing','zone','zonk','zoom',];
  // also found a long list here: https://www.sitepoint.com/community/t/change-a-single-letter-and-form-a-new-word/31590
  let word; // this is the word we print
  let wordIndex;
  let t = 0; // time, every 1 second change
  
  let oldWord = word;
  let placeholder = word;//split(join(word, ''));
  let newWord = '';
  let prevData = [];
  
  let wildcard;
  
  function setup() {
    createCanvas(640, 640);
    background(159, 100, 127);
    // let splitString = split(names, ',');
    wordIndex = int(random(0, data.length));
    word = split(data[wordIndex], ''); // pick random starting word
    prevData.push(wordIndex);
  }
  
  function draw() {
    t += deltaTime/50;
    if(t - 50 >= 0) {
      // print(" shit");
      change();
      t = 0;
    }
    
    background(159, 100, 127);
    // draw sections
    noStroke();
    rectMode(CENTER);
    fill(224, 160, 68);
    rect(110, 320, 140, 200, 20);
    rect(250, 320, 140, 200, 20);
    rect(390, 320, 140, 200, 20);
    rect(530, 320, 140, 200, 20);
    
    drawWord();
    
    push(); // outline for each card
    blendMode(MULTIPLY);
    stroke(235, 223, 225);
    noFill();
    strokeWeight(9);
    line(40, 320, 600, 320);
    rect(110, 320, 140, 200, 20);
    rect(250, 320, 140, 200, 20);
    rect(390, 320, 140, 200, 20);
    rect(530, 320, 140, 200, 20);
    pop();
    
    // print("hiihihihihihi292 t is equaled to " + t);
    
    
    // loop();
  }
  
  function drawWord() {
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(140);
    fill(242, 222, 196);
    for (let i = 0; i < 4; i++) {
      text(word[i], 110  + i*140, 370);
    }
  }
  
  function change() {
    // change the word 1 letter at a time (kinda like word ladder)
    // if not possible words, change 2 letters
    // BFS inspo from: https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/
    // get random letter from ascii
    // check if new word with new letter exists in the data array
    findNext();
    
    return;
  }
  
  function findNext() {
    
    // inspo from phoebe: look at surrounding words
    
    let found = false; // for findNext
    // let r = int(random(100, 500));
    // let start = (wordIndex - r > 0)? int(wordIndex - r) : 0;
    // let end = (wordIndex+r < data.length)? wordIndex+r : data.length;
    let start = 0;
    let end = data.length;
    let closestWord = data[start];
    let closestDist = 50;
    let closestWordIndex = 0;
    
    
    
    while(!found && start < end) {
    
      // print("start index in data is "+start);
      // print("looking at "+ data[start]);
      let currDist = wordDist(data[wordIndex], data[start]);
      // print("currDist is " + currDist);
      if( (currDist < closestDist) && !prevData.includes(start)) {
        closestWord = data[start];
        closestDist = currDist;
        closestWordIndex = start;
        if(currDist < 2 && !prevData.includes(closestWordIndex)){ // this word is one letter or two letters apart?
          // prevData.push(word);
          // word = split(closestWord, '');
          found = true;
          
        }			
      }
      start++;
      
    }
    
    //  && !data.includes(word) && 
    print("prev word is "+ join(word, ''));
    prevData.push(closestWordIndex);
    wordIndex = closestWordIndex;
    word = split(closestWord, '');
    print("new word index is "+wordIndex);
    print("new word at "+ data[wordIndex]);
    return;
    
  }
  
  function wordDist(choice1, choice2) {
    // compare the distance of each character in each word
    let c1 = split(choice1, '');
    let c2 = split(choice2, '');
    let d = 0;
    let cw1 = unchar(c1);
    let cw2 = unchar(c2);
    for (i = 0; i<4;i++) {
      // print("c2 - c1: "+c2[i] +" - " +c1[i]);
      d += abs(cw1[i]-cw2[i]);
    }
    return d;
  }
  
  
  
  
  function mousePressed() {
    noLoop();
  }