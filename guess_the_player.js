console.clear();
function underline(text) {
  return "-".repeat(text.length);
}

function easyLevelPlayers() {
  // 1️⃣ Player Names
  return [
    "virat kohli",
    "ben stokes",
    "pat cummins",
    "kane williamson",
    "shaheen afridi",
    "rohit sharma",
    "mitchell starc",
    "joe root",
    "hardik pandya",
    "rashid khan",
    "glenn maxwell",
    "quinton de kock",
    "babar azam",
    "jasprit bumrah",
    "david warner",
    "shakib al hasan",
    "jos buttler",
    "ravindra jadeja",
    "marnus labuschagne",
    "trent boult",
    "jason holder",
    "andre russell",
    "mohammad rizwan",
    "aiden markram",
    "kagiso rabada",
    "shubman gill",
    "steve smith",
    "liton das",
    "tim southee",
    "nicholas pooran",
    "kuldeep yadav",
    "wanindu hasaranga",
    "rachin ravindra",
    "sam curran",
    "axar patel",
    "glenn phillips",
    "kyle mayers",
    "mustafizur rahman",
    "moeen ali",
    "dinesh karthik",
    "mark wood",
    "sikandar raza",
    "dasun shanaka",
    "tamim iqbal",
    "david miller",
    "mohammad nabi",
    "suryakumar yadav",
    "kusal mendis",
    "haris rauf",
    "ruturaj gaikwad",
  ];
}
function easyLevel(playersIndex) {
  const players = [
    "virat kohli",
    "ben stokes",
    "pat cummins",
    "kane williamson",
    "shaheen afridi",
    "rohit sharma",
    "mitchell starc",
    "joe root",
    "hardik pandya",
    "rashid khan",
    "glenn maxwell",
    "quinton de kock",
    "babar azam",
    "jasprit bumrah",
    "david warner",
    "shakib al hasan",
    "jos buttler",
    "ravindra jadeja",
    "marnus labuschagne",
    "trent boult",
    "jason holder",
    "andre russell",
    "mohammad rizwan",
    "aiden markram",
    "kagiso rabada",
    "shubman gill",
    "steve smith",
    "liton das",
    "tim southee",
    "nicholas pooran",
    "kuldeep yadav",
    "wanindu hasaranga",
    "rachin ravindra",
    "sam curran",
    "axar patel",
    "glenn phillips",
    "kyle mayers",
    "mustafizur rahman",
    "moeen ali",
    "dinesh karthik",
    "mark wood",
    "sikandar raza",
    "dasun shanaka",
    "tamim iqbal",
    "david miller",
    "mohammad nabi",
    "suryakumar yadav",
    "kusal mendis",
    "haris rauf",
    "ruturaj gaikwad",
  ];
  // 1️⃣ Countries
  const countries = [
    "India",
    "England",
    "Australia",
    "New Zealand",
    "Pakistan",
    "India",
    "Australia",
    "England",
    "India",
    "Afghanistan",
    "Australia",
    "South Africa",
    "Pakistan",
    "India",
    "Australia",
    "Bangladesh",
    "England",
    "India",
    "Australia",
    "New Zealand",
    "West Indies",
    "West Indies",
    "Pakistan",
    "South Africa",
    "South Africa",
    "India",
    "Australia",
    "Bangladesh",
    "New Zealand",
    "West Indies",
    "India",
    "Sri Lanka",
    "New Zealand",
    "England",
    "India",
    "New Zealand",
    "West Indies",
    "Bangladesh",
    "England",
    "India",
    "England",
    "Zimbabwe",
    "Sri Lanka",
    "Bangladesh",
    "South Africa",
    "Afghanistan",
    "India",
    "Sri Lanka",
    "Pakistan",
    "India",
  ];

  // 2️⃣ Categories
  const categories = [
    "Batsman",
    "All-rounder",
    "Bowler",
    "Batsman",
    "Bowler",
    "Batsman",
    "Bowler",
    "Batsman",
    "All-rounder",
    "Bowler",
    "All-rounder",
    "Batsman/WK",
    "Batsman",
    "Bowler",
    "Batsman",
    "All-rounder",
    "Batsman/WK",
    "All-rounder",
    "Batsman",
    "Bowler",
    "All-rounder",
    "All-rounder",
    "Batsman/WK",
    "Batsman",
    "Bowler",
    "Batsman",
    "Batsman",
    "Batsman/WK",
    "Bowler",
    "Batsman/WK",
    "Bowler",
    "All-rounder",
    "All-rounder",
    "All-rounder",
    "All-rounder",
    "Batsman",
    "All-rounder",
    "Bowler",
    "All-rounder",
    "Batsman/WK",
    "Bowler",
    "All-rounder",
    "All-rounder",
    "Batsman",
    "Batsman",
    "All-rounder",
    "Batsman",
    "Batsman/WK",
    "Bowler",
    "Batsman",
  ];

  // 3️⃣ Batting Hand
  const battingHand = [
    "Right",
    "Left",
    "Right",
    "Right",
    "Left",
    "Right",
    "Left",
    "Right",
    "Right",
    "Right",
    "Right",
    "Left",
    "Right",
    "Right",
    "Left",
    "Left",
    "Right",
    "Left",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
    "Left",
    "Left",
    "Right",
    "Left",
    "Left",
    "Left",
    "Right",
    "Left",
    "Left",
    "Left",
    "Right",
    "Right",
    "Right",
    "Right",
    "Left",
    "Left",
    "Right",
    "Right",
    "Right",
    "Right",
    "Right",
  ];

  // 4️⃣ Bowling Hand
  const bowlingHand = [
    "Right-arm medium",
    "Right-arm fast-medium",
    "Right-arm fast",
    "Right-arm off-spin",
    "Left-arm fast",
    "Right-arm off-spin",
    "Left-arm fast",
    "Right-arm off-spin",
    "Right-arm fast-medium",
    "Right-arm leg-spin",
    "Right-arm off-spin",
    null,
    "Right-arm off-spin",
    "Right-arm fast",
    "Right-arm leg-spin",
    "Left-arm orthodox",
    "Right-arm medium",
    "Left-arm orthodox",
    "Right-arm leg-spin",
    "Left-arm fast-medium",
    "Right-arm fast-medium",
    "Right-arm fast",
    null,
    "Right-arm off-spin",
    "Right-arm fast",
    "Right-arm off-spin",
    "Right-arm leg-spin",
    null,
    "Right-arm medium-fast",
    null,
    "Left-arm wrist-spin",
    "Right-arm leg-spin",
    "Left-arm spin",
    "Left-arm medium-fast",
    "Left-arm orthodox",
    "Right-arm off-spin",
    "Right-arm medium",
    "Left-arm fast-medium",
    "Right-arm off-spin",
    null,
    "Right-arm fast",
    "Right-arm off-spin",
    "Right-arm medium-fast",
    "Right-arm off-spin",
    "Right-arm off-spin",
    "Right-arm off-spin",
    "Right-arm medium",
    null,
    "Right-arm fast",
    "Right-arm medium",
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
    "chennai super kings",
  ];
  //
  const age = [
    36, // Virat Kohli
    34, // Ben Stokes
    32, // Pat Cummins
    35, // Kane Williamson
    25, // Shaheen Afridi
    38, // Rohit Sharma
    35, // Mitchell Starc
    34, // Joe Root
    32, // Hardik Pandya
    27, // Rashid Khan
    37, // Glenn Maxwell
    32, // Quinton de Kock
    31, // Babar Azam
    31, // Jasprit Bumrah
    38, // David Warner
    38, // Shakib Al Hasan
    35, // Jos Buttler
    36, // Ravindra Jadeja
    31, // Marnus Labuschagne
    36, // Trent Boult
    34, // Jason Holder
    37, // Andre Russell
    33, // Mohammad Rizwan
    31, // Aiden Markram
    30, // Kagiso Rabada
    26, // Shubman Gill
    36, // Steve Smith
    31, // Liton Das
    36, // Tim Southee
    30, // Nicholas Pooran
    30, // Kuldeep Yadav
    28, // Wanindu Hasaranga
    26, // Rachin Ravindra
    27, // Sam Curran
    31, // Axar Patel
    28, // Glenn Phillips
    33, // Kyle Mayers
    30, // Mustafizur Rahman
    38, // Moeen Ali
    40, // Dinesh Karthik
    35, // Mark Wood
    39, // Sikandar Raza
    34, // Dasun Shanaka
    36, // Tamim Iqbal
    36, // David Miller
    40, // Mohammad Nabi
    35, // Suryakumar Yadav
    30, // Kusal Mendis
    31, // haris rauf
    28, // ruturaj Gaikwad
  ];
  const debutDate = [
    "18 Aug 2008 (ODI vs Sri Lanka)",
    "25 Aug 2011 (ODI vs Ireland)",
    "13 Oct 2011 (T20I vs South Africa)",
    "10 Aug 2010 (ODI vs India)",
    "3 Apr 2018 (T20I vs West Indies)",
    "23 Jun 2007 (ODI vs Ireland)",
    "20 Oct 2010 (ODI vs India)",
    "11 Dec 2012 (Test vs India)",
    "26 Jan 2016 (T20I vs Australia)",
    "18 Oct 2015 (ODI vs Zimbabwe)",
    "25 Aug 2012 (ODI vs Afghanistan)",
    "19 Dec 2012 (T20I vs New Zealand)",
    "31 May 2015 (ODI vs Zimbabwe)",
    "23 Jan 2016 (ODI vs Australia)",
    "11 Jan 2009 (T20I vs South Africa)",
    "6 Aug 2006 (ODI vs Zimbabwe)",
    "31 Aug 2011 (T20I vs India)",
    "8 Feb 2009 (ODI vs Sri Lanka)",
    "7 Oct 2018 (Test vs Pakistan)",
    "22 Dec 2011 (Test vs Australia)",
    "1 Feb 2013 (ODI vs Australia)",
    "11 Mar 2011 (ODI vs Ireland)",
    "24 Apr 2015 (T20I vs Bangladesh)",
    "28 Sep 2017 (Test vs Bangladesh)",
    "5 Jul 2014 (T20I vs Australia)",
    "31 Jan 2019 (ODI vs New Zealand)",
    "19 Feb 2010 (T20I vs Pakistan)",
    "5 Jun 2015 (Test vs India)",
    "15 Jun 2008 (ODI vs England)",
    "23 Sep 2016 (T20I vs Pakistan)",
    "23 Mar 2017 (Test vs Australia)",
    "2 Jul 2017 (ODI vs Zimbabwe)",
    "1 Sep 2021 (T20I vs Bangladesh)",
    "1 Jun 2018 (Test vs Pakistan)",
    "15 Jun 2014 (ODI vs Bangladesh)",
    "17 Feb 2017 (T20I vs South Africa)",
    "7 Jan 2021 (ODI vs Bangladesh)",
    "24 Apr 2015 (T20I vs Pakistan)",
    "28 Feb 2014 (ODI vs West Indies)",
    "5 Sep 2004 (ODI vs England)",
    "21 May 2015 (Test vs New Zealand)",
    "3 May 2013 (ODI vs Bangladesh)",
    "1 Aug 2015 (T20I vs Pakistan)",
    "9 Feb 2007 (ODI vs Zimbabwe)",
    "22 May 2010 (T20I vs West Indies)",
    "19 Apr 2009 (ODI vs Scotland)",
    "14 Mar 2021 (T20I vs England)",
    "19 Oct 2015 (Test vs West Indies)",
    "24 Jan 2020 (T20I vs Bangladesh)",
    "28 Jul 2021 (T20I vs Sri Lanka)",
  ];

  console.log("EASY LEVEL");
  console.log(underline("EASY LEVEL"));
  console.log(resource.join(" || "));

  const numberForHelp = [
    "   1   ",
    "   2    ",
    "      3     ",
    "      4     ",
    "    5   ",
    " 6 ",
    "    7     ",
  ];
  const helpResource = [
    "Country",
    "Category",
    "Batting-hand",
    "Bowling-hand",
    "IPL Team",
    "Age",
    "Debut Date",
  ];

  console.log(numberForHelp.join(" || "));
  console.log(underline(numberForHelp.join(" || ")));
  console.log(helpResource.join(" || "));

  return [
    players[playersIndex],
    countries[playersIndex],
    categories[playersIndex],
    battingHand[playersIndex],
    bowlingHand[playersIndex],
    iplTeams[playersIndex],
    age[playersIndex],
    debutDate[playersIndex],
  ];
}

function indexForHelpResource() {
  return prompt(
    " Ask for help : ",
  );
}

let helpResourcesIndex;

function askForResources(data) {
  console.log("\n");
  helpResourcesIndex = indexForHelpResource();
  console.log("\n");

  if (helpResourcesIndex === "quit") {
    return "quit";
  }

  if (parseInt(helpResourcesIndex) > data.length - 1) {
    console.log("invalid input");
    askForResources(data);
  }

  return data[helpResourcesIndex];
}

const headingOfAskedResource = [];
const resource = [];

function askedResource(data) {
  resource.push((askForResources(data) + "").padEnd(50));

  const helpResource = [
    "Country",
    "Category",
    "Batting-hand",
    "Bowling-hand",
    "IPL Team",
    "Age",
    "Debut Date",
  ];

  headingOfAskedResource.push(
    helpResource[helpResourcesIndex - 1].padEnd(50)
  );

  console.log(headingOfAskedResource.join(" || "));
  console.log("\n");

  return resource.join(" || ")  ;
}

function userGuess(data) {
  console.log(askedResource(data));
  console.log("\n\n");

  const userInput = prompt("Guess the player Name : ");

  if (userInput === "quit" || resource === "quit") {
    return "quit";
  }

  if (userInput === data[0]) {
    return "You Guessed Right 🎉";
  }

  return "Wrong Guess!! \n";
}

function playerDataLevel(playersIndex) {
  const levelInput = prompt("\n\nEnter the level : ");

  if (parseInt(levelInput) === 1) {
    console.clear();
    return easyLevel(playersIndex);
  }

  console.log("invalid data");
  playerDataLevel(playersIndex);
}

function playing() {
  const players = easyLevelPlayers();
  const playersIndex = Math.floor(Math.random() * players.length);
  let chances = 2;
  
  let data = playerDataLevel(playersIndex);
  console.log(`\n\nYou have ${chances + 1} Chances to Guess`);
  let guessedInput = userGuess(data);

  while (guessedInput !== "You Guessed Right 🎉") {
    if (guessedInput === "quit" || chances === 0) {
      const message = ` \n\n ${
        players[playersIndex]
      } is the correct answer but well played 👍`;
      return message;
    }
    console.log(" \nWrong guess!!");
    chances--;
    console.log(`${chances + 1} Chances Remaining`);
    
    guessedInput = userGuess(data);
  }

  return guessedInput;
}

const levels = ["1.Easy Level", "2.Medium Level"];

console.log(levels.join("\n"));
console.log(playing());
