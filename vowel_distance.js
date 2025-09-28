function vowelSpot(string, index) {
  const isVowel = string[index] === "a" || string[index] === "e" || string[index] === "i" || string[index] === "o" || string[index] === "u;"
  return isVowel;
}

function vowelDifference(string) {
  let index = 0;
  let count = 0;
  let vowelIndex = 0;
  let difference = 0;
  let prevDifference;
  let minDiff;
  while(index < string.length  ){
    
    if(vowelSpot(string, index)){
      count = count + 1;
      console.log(count);
      
      if (count > 1) { 
        difference = index - vowelIndex;
        minDiff = difference < prevDifference && count > 2 ? difference : prevDifference;
        prevDifference = difference;
        console.log("ja rha hai");
        
      }
      vowelIndex = index;
      console.log(32);
      
    }
    
   index = index + 1;

  }

  
  
  return difference;
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

  testCase("hll", -1)
}
testOfAll();
