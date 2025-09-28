function vowelSpot(letter) {
  const isVowel = letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
  return isVowel;
}

function vowelDifference(string) {
  let count = 0;
  let vowelIndex = 0;
  let difference = 0;
  let prevDifference = 1001;
  let minDiff;
  let index = 0;

  while (index < string.length) {
    if (vowelSpot(string[index])) {
      count = count + 1;

      if (count > 1) {
        difference = index - vowelIndex;
        minDiff = (difference < prevDifference) ? difference : prevDifference;
        prevDifference = difference;
      }
      vowelIndex = index;
    }
    index = index + 1;
  }

  if (count < 2) {
    return -1;
  }

  return minDiff;
}

function resultSymbol(actualValue, expectedValue) {
  const isEqual = actualValue === expectedValue;
  const symbol = isEqual ? "✅" : "❌";

  return symbol;
}

function testCase(string, expectedValue) {
  const actualValue = vowelDifference(string);
  const symbolMessage = resultSymbol(actualValue, expectedValue);
  const expectedValueMessage = "|| expected : " + expectedValue;
  const actualValueMessage = "|| actual : " + actualValue;
  const message = symbolMessage + expectedValueMessage + actualValueMessage;

  console.log(message);
}

function testOfAll() {
  testCase("aa", 1);
  testCase("aba", 2);
  testCase("abcdegi", 2);
  testCase("hello", 3);
  testCase("strength", -1);
  testCase("apple", 4);
  testCase("aapa", 1);
  testCase("abcejhupoccccci", 2);
  testCase("beauty", 1);
}

testOfAll();
