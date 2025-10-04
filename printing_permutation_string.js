function findingPermutation(string){
  return string;
}

function permutations(string){
  return `"", "${findingPermutation(string)}"`;
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
 testCase("a", '"", "a"');
}

testOfAll();
