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

function isNumber(bencodedString) {
    const bencodedArray = bencodedString.split("");
    const length = bencodedArray.length;
    
    return bencodedArray[0] === "i" && bencodedArray[length - 1] === "e";
}

function isString(bencodedString) {
    const bencodedArray = bencodedString.split("");

    const stringElement = (bencodedArray.slice((bencodedArray.indexOf(":") + 1))).join("")
    const stringLength = stringElement.length;
    
    return stringLength === parseInt(bencodedArray[0]);
}

function bencodedStringType(bencodedString) {
    if(isNumber(bencodedString)) {
        return "number";
    }
    if(isString(bencodedString)) {
        return "string";
    }
}

function decodedInteger(bencodedString) {
    const bencodedArray = bencodedString.split("");
    bencodedArray.shift();
    bencodedArray.pop();

    const decodedNumber = parseInt(bencodedArray.join(""));
    
    return decodedNumber;
}

function decodedString(bencodedString) {
    const bencodedArray = bencodedString.split("");

    const stringElement = (bencodedArray.slice((bencodedArray.indexOf(":") + 1))).join("");
    
    return stringElement;
}

function decode(bencodedString) {
    const typeOfbencode = bencodedStringType(bencodedString);

    switch(typeOfbencode) {
        case "number": 
        return decodedInteger(bencodedString);
        case "string":
        return decodedString(bencodedString);
    }
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
    const symbol = actualValue === expectedValue ? "✅" : "❌";
    const input = `Input : ${bencodedString}`;
    const output = `Expected Output : ${expectedValue} \n Actual Output : ${actualValue}`;
    const messageForPassedCase = `${symbol} ${description}`;
    const messageForFailedCase = `${symbol} ${description} \n ${input} \n ${output}`;
    const messageDisplay = symbol === "✅" ? messageForPassedCase : messageForFailedCase;
   
    console.log(messageDisplay);
}

function encodingTestCase() {
    encodingTest(-42, "negative integer", "i-42e");
    encodingTest("abc", "regular string", "3:abc");
    encodingTest("", "empty string", "0:");
    encodingTest([1,2,3,4], "regular list of numbers", "li1ei2ei3ei4ee");
    encodingTest(["a","b","c"], "regular list of string", "l1:a1:b1:ce");
    encodingTest(["a","b",23], "mixed list of number and string", "l1:a1:bi23ee");
    encodingTest(["a",1,[1,"",["b"]]], "mixed list of number, string, nested list", "l1:ai1eli1e0:l1:beee");
    encodingTest([1,"Two",["Three",4,["Five"]]], "final test case including all cases", "li1e3:Twol5:Threei4el4:Fiveeee");
}

function decodingTestCase() {
    decodingTest("i1e", "positive integer", 1);
    decodingTest("i-23e", "negative integer", -23);
    decodingTest("5:hello", "string", "hello");
    decodingTest("0:", "string", "");
}
function testAll() {
    // encodingTestCase();
    decodingTestCase();
}

testAll();
