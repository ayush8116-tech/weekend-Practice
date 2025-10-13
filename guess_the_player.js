console.clear()

function easyLevel(playersIndex) {
// 1️⃣ Player Names
const players = [
  "virat kohli", "ben stokes", "pat cummins", "kane williamson", "shaheen afridi",
  "rohit sharma", "mitchell starc", "joe root", "hardik pandya", "rashid khan",
  "glenn maxwell", "quinton de kock", "babar azam", "jasprit bumrah", "david warner",
  "shakib al hasan", "jos buttler", "ravindra jadeja", "marnus labuschagne", "trent boult",
  "jason holder", "andre russell", "mohammad rizwan", "aiden markram", "kagiso rabada",
  "shubman gill", "steve smith", "liton das", "tim southee", "nicholas pooran",
  "kuldeep yadav", "wanindu hasaranga", "rachin ravindra", "sam curran", "axar patel",
  "glenn phillips", "kyle mayers", "mustafizur rahman", "moeen ali", "dinesh karthik",
  "mark wood", "sikandar raza", "dasun shanaka", "tamim iqbal", "david miller",
  "mohammad nabi", "suryakumar yadav", "kusal mendis", "haris rauf", "ruturaj gaikwad"
];

// 1️⃣ Countries
const countries = [
  "India", "England", "Australia", "New Zealand", "Pakistan",
  "India", "Australia", "England", "India", "Afghanistan",
  "Australia", "South Africa", "Pakistan", "India", "Australia",
  "Bangladesh", "England", "India", "Australia", "New Zealand",
  "West Indies", "West Indies", "Pakistan", "South Africa", "South Africa",
  "India", "Australia", "Bangladesh", "New Zealand", "West Indies",
  "India", "Sri Lanka", "New Zealand", "England", "India",
  "New Zealand", "West Indies", "Bangladesh", "England", "India",
  "England", "Zimbabwe", "Sri Lanka", "Bangladesh", "South Africa",
  "Afghanistan", "India", "Sri Lanka", "Pakistan", "India"
];

// 2️⃣ Categories
const categories = [
  "Batsman", "All-rounder", "Bowler", "Batsman", "Bowler",
  "Batsman", "Bowler", "Batsman", "All-rounder", "Bowler",
  "All-rounder", "Batsman/WK", "Batsman", "Bowler", "Batsman",
  "All-rounder", "Batsman/WK", "All-rounder", "Batsman", "Bowler",
  "All-rounder", "All-rounder", "Batsman/WK", "Batsman", "Bowler",
  "Batsman", "Batsman", "Batsman/WK", "Bowler", "Batsman/WK",
  "Bowler", "All-rounder", "All-rounder", "All-rounder", "All-rounder",
  "Batsman", "All-rounder", "Bowler", "All-rounder", "Batsman/WK",
  "Bowler", "All-rounder", "All-rounder", "Batsman", "Batsman",
  "All-rounder", "Batsman", "Batsman/WK", "Bowler", "Batsman"
];

// 3️⃣ Batting Hand
const battingHand = [
  "Right", "Left", "Right", "Right", "Left",
  "Right", "Left", "Right", "Right", "Right",
  "Right", "Left", "Right", "Right", "Left",
  "Left", "Right", "Left", "Right", "Right",
  "Right", "Right", "Right", "Right", "Right",
  "Right", "Right", "Right", "Right", "Left",
  "Left", "Right", "Left", "Left", "Left",
  "Right", "Left", "Left", "Left", "Right",
  "Right", "Right", "Right", "Left", "Left",
  "Right", "Right", "Right", "Right", "Right"
];

// 4️⃣ Bowling Hand
const bowlingHand = [
  "Right-arm medium", "Right-arm fast-medium", "Right-arm fast", "Right-arm off-spin", "Left-arm fast",
  "Right-arm off-spin", "Left-arm fast", "Right-arm off-spin", "Right-arm fast-medium", "Right-arm leg-spin",
  "Right-arm off-spin", null, "Right-arm off-spin", "Right-arm fast", "Right-arm leg-spin",
  "Left-arm orthodox", "Right-arm medium", "Left-arm orthodox", "Right-arm leg-spin", "Left-arm fast-medium",
  "Right-arm fast-medium", "Right-arm fast", null, "Right-arm off-spin", "Right-arm fast",
  "Right-arm off-spin", "Right-arm leg-spin", null, "Right-arm medium-fast", null,
  "Left-arm wrist-spin", "Right-arm leg-spin", "Left-arm spin", "Left-arm medium-fast", "Left-arm orthodox",
  "Right-arm off-spin", "Right-arm medium", "Left-arm fast-medium", "Right-arm off-spin", null,
  "Right-arm fast", "Right-arm off-spin", "Right-arm medium-fast", "Right-arm off-spin", "Right-arm off-spin",
  "Right-arm off-spin", "Right-arm medium", null, "Right-arm fast", "Right-arm medium"
];
// 5️⃣ Ipl Team
const iplTeams = [
  "royal challengers bengaluru",
  "chennai super kings",
  "kolkata knight riders",
  "gujarat titans",
  "no ipl team",
  "mumbai indians",
  "kolkata knight riders",
  "rajasthan royals",
  "mumbai indians",
  "gujarat titans",
  "royal challengers bengaluru",
  "lucknow super giants",
  "no ipl team",
  "mumbai indians",
  "delhi capitals",
  "kolkata knight riders",
  "rajasthan royals",
  "chennai super kings",
  "no ipl team",
  "rajasthan royals",
  "rajasthan royals",
  "kolkata knight riders",
  "no ipl team",
  "sunrisers hyderabad",
  "delhi capitals",
  "gujarat titans",
  "delhi capitals",
  "kolkata knight riders",
  "royal challengers bengaluru",
  "lucknow super giants",
  "delhi capitals",
  "royal challengers bengaluru",
  "chennai super kings",
  "punjab kings",
  "delhi capitals",
  "sunrisers hyderabad",
  "lucknow super giants",
  "chennai super kings",
  "kolkata knight riders",
  "royal challengers bengaluru",
  "lucknow super giants",
  "punjab kings",
  "gujarat titans",
  "lucknow super giants",
  "rajasthan royals",
  "sunrisers hyderabad",
  "mumbai indians",
  "kolkata knight riders",
  "no ipl team",
  "chennai super kings"
];

const helpResources = [countries[playersIndex], categories[playersIndex], battingHand[playersIndex], bowlingHand[playersIndex], iplTeams[playersIndex]];
console.log("1.Country\n2.Category(bat/bowl/ar)\n3.Batting Hand\n4.Bowling Hand\n5.Ipl Team");
return helpResources;
}


function askForResources(data) {
  console.log('\n');
  const helpResourcesIndex = prompt("Take help from any of the above resources \n\n Enter the Number : ");
  console.log('\n');

  if (helpResourcesIndex === "quit") {
    return "quit";
  }

  if (helpResourcesIndex > data.length) {
    console.log("invalid input");
    askForResources();
  }
  return data[helpResourcesIndex - 1];
}

function userGuess(data) {
  const resource = askForResources(data);
  console.log(resource);
  console.log("\n\n");

  

  const userInput = prompt("Guess the player Name : ");

  if (userInput === "quit" || resource === "quit") {
    return "quit";
  }

  if (userInput === players[playersIndex]) {
    return "You Guessed Right 🎉";
  }

  return "Wrong Guess!! \n"
}

function playing() {
  const playersIndex = Math.floor(Math.random() * players.length);
  const levelInput = prompt("\n\nEnter the level : ");
  let data;

  if(levelInput === 1) {
    data = easyLevel(playersIndex);
  }

  let guessedInput = userGuess(data);
  let chances = 2;

  while (guessedInput !== "You Guessed Right 🎉") {
    console.log("Wrong guess!!");

    if (guessedInput === "quit" || chances === 0 ) {
      const message = `${players[playersIndex]} is the correct answer but well played 👍 `;
      return message;
    }

    guessedInput = userGuess();
    chances--;
    //  console.log(chances);
  }

  return guessedInput;
}

console.log(playing());

function mediumLevel(){}

const levels = ["1.Easy Level","2.Medium Level"];

console.log(levels.join("\n"));


