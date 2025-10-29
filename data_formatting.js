function encodedString(data) {
    const stringConversionArray = [];
    const prefix = `${data.length}:`;
    stringConversionArray.push(prefix,data);
    const convertedDataForString = stringConversionArray.join("");
    
    return convertedDataForString;
}

function encodedInteger(data) {
    const numberConversionArray = [];
    const prefix = "i";
    const suffix = "e";
    numberConversionArray.push(prefix,data,suffix);
    const convertedDataForInteger = numberConversionArray.join("");
    
    return convertedDataForInteger;
}

function encodedList(data) {
    const prefix = "l";
    const suffix = "e";
    const listConversionArray = [prefix];

    for(let index = 0; index < data.length; index++) {
        let convertedElement;

        if(typeof data[index] === "number") {
            convertedElement = encodedInteger(data[index]);
        }
        if(typeof data[index] === "string") {
            convertedElement = encodedString(data[index]);
        }
        if(typeof data[index] === "object") {
            convertedElement = encodedList(data[index]);
        }

        listConversionArray.push(convertedElement);
    }
    
    listConversionArray.push(suffix);
    const convertedDataForList = listConversionArray.join("");
    
    return convertedDataForList;
}


function isNumber(bencodedString) {
    const bencodedArray = bencodedString.split("");
    const length = bencodedArray.length;
    
    return bencodedArray[0] === "i" && bencodedArray[length - 1] === "e";
}

function isString(bencodedString) {
    const bencodedArray = bencodedString.split("");
    const colonIndex = bencodedArray.indexOf(":");
    const numberArray = bencodedArray.slice(0, (colonIndex));
    const stringArray = bencodedArray.slice((colonIndex + 1));
    const numberElement = numberArray.join("")
    const stringElement = stringArray.join("")
    const stringLength = stringElement.length;
    
    return [parseInt(numberElement) === stringLength, stringElement];
}

function isList(bencodedString) {
    const bencodedArray = bencodedString.split("");
    const length = bencodedArray.length;
    
    return bencodedArray[0] === "l";
    // && bencodedArray[length - 1] === "e"
}

function bencodedStringType(bencodedString) {
    if(isNumber(bencodedString)) {
        return "number";
    }
    if(isString(bencodedString)[0]) {
        return "string";
    }
    if(isList(bencodedString)) {
        return "object";
    }
    
    return "invalid";
}

function decodedInteger(bencodedString) {
    const bencodedArray = bencodedString.split("");
    bencodedArray.shift();
    bencodedArray.pop();

    const decodedNumber = parseInt(bencodedArray.join(""));
    
    return decodedNumber;
}

function decodedString(bencodedString) {        
    return isString(bencodedString)[1];
}

function decodedList(bencodedString) {
    let dataToDecode = [];
    const decodedListArray = [];
    let type;
    
    for(let index = 1; index < bencodedString.length; index++) {
        dataToDecode.push(bencodedString[index]);
        console.log(dataToDecode);
            
        type = bencodedStringType(dataToDecode.join(""));
        console.log(type);
        if(type === "number") {
            decodedListArray.push(decodedInteger(dataToDecode.join("")));
            dataToDecode = [];
        }
        if (type === "string") {
            decodedListArray.push(decodedString(dataToDecode.join("")));
            dataToDecode = [];
        }
        if (type === "object") {
            console.log(bencodedString.slice(index));
            decodedListArray.push(decodedList(bencodedString.slice(index)));
            dataToDecode = [];
        }
        if(dataToDecode[0] === "e") {
           console.log(decodedListArray);
        return decodedListArray;
       } 
    }
    
    return dataToDecode;
}

function encode(data) {
    switch(typeof data) {
        case "string":
            return encodedString(data);
        case "number":
            return encodedInteger(data);
        case "object":
            return encodedList(data);
    }
}

function decode(bencodedString) {
    const typeOfbencode = bencodedStringType(bencodedString);

    switch(typeOfbencode) {
        case "number": 
        return decodedInteger(bencodedString);
        case "string":
        return decodedString(bencodedString);
        case "object":
        return decodedList(bencodedString);
    }
}

function isArray(array) {
  return typeof array === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function encodingTest(data, description, expectedValue){
    const actualValue = encode(data);
    const symbol = actualValue === expectedValue ? "✅" : "❌";
    const input = `Input : ${data}`;
    const output = `Expected Output : ${expectedValue} \n Actual Output : ${actualValue}`;
    const messageForPassedCase = `${symbol} ${description}`;
    const messageForFailedCase = `${symbol} ${description} \n ${input} \n ${output}`;
    const messageDisplay = symbol === "✅" ? messageForPassedCase : messageForFailedCase;
   
    console.log(messageDisplay);
}

function decodingTest(bencodedString, description, expectedValue){
    const actualValue = decode(bencodedString);
    const symbol = actualValue === expectedValue || areDeepEqual(actualValue, expectedValue) ? "✅" : "❌";
    const input = `Input : ${bencodedString}`;
    const output = `Expected Output : ${expectedValue} \n Actual Output : ${actualValue}`;
    const messageForPassedCase = `${symbol} ${description}`;
    const messageForFailedCase = `${symbol} ${description} \n ${input} \n ${output}`;
    const messageDisplay = symbol === "✅" ? messageForPassedCase : messageForFailedCase;
   
    console.log(messageDisplay);
}

function encodingTestCase() {
    encodingTest(-42, "encoded negative integer", "i-42e");
    encodingTest("abc", "encoded regular string", "3:abc");
    encodingTest("", "encoded empty string", "0:");
    encodingTest([1,2,3,4], "encoded regular list of numbers", "li1ei2ei3ei4ee");
    encodingTest(["a","b","c"], "encoded regular list of string", "l1:a1:b1:ce");
    encodingTest(["a","b",23], "encoded mixed list of number and string", "l1:a1:bi23ee");
    encodingTest(["a",1,[1,"",["b"]]], "encoded mixed list of number, string, nested list", "l1:ai1eli1e0:l1:beee");
    encodingTest([1,"Two",["Three",4,["Five"]]], "encoded final test case including all cases", "li1e3:Twol5:Threei4el4:Fiveeee");
}

function decodingTestCase() {
    decodingTest("i1e", "decoded positive integer", 1);
    decodingTest("i-23e", "decoded negative integer", -23);
    decodingTest("5:hello", "decoded string", "hello");
    decodingTest("0:", "decoded empty string", "");
    decodingTest("0:", "decoded empty string", "");
    decodingTest("li254ee", "decoded list of number", [254]);
    decodingTest("l3:abce", "decoded list of string", ["abc"]);
    decodingTest("l3:abee", "decoded list of string", ["abe"]);
    decodingTest("l3:abeli123eee", "decoded list of string", ["abe", [123]]);
    // decodingTest("li254e3:abcli1eee", "decoded nested list", [254, "abc", [1]]);
    // decodingTest("li254e3:abcl0:ee", "decoded nested empty list", [254, "abc", [""]]);
    // decodingTest("li254e3:abcli1eee", "decoded nested list of number", [254, "abc", [1]]);
}

function underline(text) {
    return "-".repeat(text.length);
}

function testAll() {
    console.log("encoding");
    console.log((underline("encoding")));
    
    encodingTestCase();

    console.log("\ndecoding");
    console.log((underline("decoding")));
    
    decodingTestCase();
}

testAll();
