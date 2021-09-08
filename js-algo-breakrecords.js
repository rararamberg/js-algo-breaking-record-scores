function breakingRecords(scores) {
  // Establish variables high/low scores/records with let as will be changing
  // set high and low score to first index of array as it is "first game"
  let highScore = scores[0];
  let lowScore = scores[0];
  let recordHigh = 0;
  let recordLow = 0;

  // use forEach method because each score in array will need to be compared to
  // the conditionals set for high and low score
  scores.forEach((score) => {
    // using if statement to check whether score is below low or above high
    // if conditional is met as true that score becomes the new low or high
    // and the respectful record is tallied by 1 before moving
    // on to the next score in the array
    if (score < lowScore) {
      lowScore = score;
      recordLow += 1;
      console.log(`low score is now ${lowScore} and recordLow is ${recordLow}`);
    }
    if (score > highScore) {
      highScore = score;
      recordHigh += 1;
      console.log(
        `high score is now ${highScore} and recordHigh is ${recordHigh}`
      );
    }
  });

  return [recordHigh, recordLow];
}

// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

// completed algo originally on hackerrank
