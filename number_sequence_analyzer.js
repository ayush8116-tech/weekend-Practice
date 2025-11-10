// You need to find 5 answers using only array methods (no loops, no objects).

// 🎯 Tasks
// Find the number that appears most frequently.
// 👉 Output example: 9

// Return a new array of numbers that appear more than once, sorted in ascending order.
// 👉 Output: [2, 5, 9]

// Return the sum of all unique numbers (that appear exactly once).
// 👉 Output: 1 + 3 = 4

// Return a new array where every duplicate number is removed (keep only first occurrence).
// 👉 Output: [3, 9, 2, 5, 1]

// Return the difference between the largest and smallest number.
// 👉 Output: 9 - 1 = 8

//######################    START FROM HERE     ###########################//

// Find the number that appears most frequently.
// 👉 Output example: 9
const nums = [3, 9, 2, 9, 5, 2, 9, 1, 5, ];

const occurences = (repetitionLogs, value) => {
  const index = repetitionLogs.findIndex(row => row[0] === value);
  
  if(index === -1) {
    repetitionLogs.push([value, 1]);
    
    return repetitionLogs;
  }
  
  repetitionLogs[index][1] += 1;
  
  return repetitionLogs;
}

const frequencyTable = nums.reduce(occurences, []);
// Return a new array of numbers that appear more than once, sorted in ascending order.
// 👉 Output: [2, 5, 9]

const maxFrequency = frequencyTable.reduce(((max, row) =>{
  // console.log(max);
  if(max < row[1]) {
    max = row[1]
    return max;
  }
  
  return max;
}), frequencyTable[0][1]);

const mostFrequent = frequencyTable.reduce(((frequentElements, row) => {
  if(row[1] === maxFrequency) {
    frequentElements.push(row[0])
    return frequentElements;
  }
  
  return frequentElements;
}), []);

console.log(mostFrequent);

// Return a new array of numbers that appear more than once, sorted in ascending order.
// 👉 Output: [2, 5, 9]

const repeatMoreThanOnce = frequencyTable.reduce(((atleastTwoOccurence, row) => {
  if(row[1] > 1) {
    atleastTwoOccurence.push(row[0])
    return atleastTwoOccurence;
  }
  
  return atleastTwoOccurence;
}), [])

console.log("data which repeat more than once :",repeatMoreThanOnce.sort((x, y) => x - y));

// [ [ 3, 1 ], [ 9, 3 ], [ 2, 3 ], [ 5, 2 ], [ 1, 1 ] ]

// Return the sum of all unique numbers (that appear exactly once).
// 👉 Output: 1 + 3 = 4

const distinct = frequencyTable.map(row => row[0]);

const sumOfData = distinct.reduce((sum, number) => sum + number);

console.log("sum of unique data :", sumOfData);

// Return a new array where every duplicate number is removed (keep only first occurrence).
// 👉 Output: [3, 9, 2, 5, 1]

console.log("distinct :",distinct);




