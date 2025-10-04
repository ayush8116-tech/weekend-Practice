function findingPermutation(string, index){
 const combination = string[index];
 if(index === string.length - 1){
  return combination;
 }
  return combination + ", " + findingPermutation(string,index + 1);
}

function permutations(string){
  return `"", ${findingPermutation(string, 0)}`;
}

function resultSymbol(actualValue, expectedValue) {
  const isEqual = actualValue === expectedValue;
  const symbol = isEqual ? "✅" : "❌";

  return symbol;
}

function testCase(string, expectedValue) {
  const actualValue = permutations(string);
  const expected = `expected : ${expectedValue}`;
  const actual = `actual : ${actualValue}`;
  const symbol = resultSymbol(actualValue, expectedValue);
  const message = `${symbol} || ${expected} || ${actual}`;

  console.log(message);
}

function testOfAll() {
 testCase("a", '"", a');
 testCase("ab", '"", a, b');
 testCase("abc", '"", a, b, c');
}

testOfAll();
