function conversionForString(data) {
    const stringConversionArray = [];
    const prefix = `${data.length}:`;
    stringConversionArray.push(prefix,data);
    const convertedDataForString = stringConversionArray.join("");
    
    return convertedDataForString;
}

function conversionForInteger(data) {
    const numberConversionArray = [];
    const prefix = "i";
    const suffix = "e";
    numberConversionArray.push(prefix,data,suffix);
    const convertedDataForInteger = numberConversionArray.join("");
    
    return convertedDataForInteger;
}

function conversionForList(data) {
    const prefix = "l";
    const suffix = "e";
    const listConversionArray = [prefix];

    for(let index = 0; index < data.length ; index++) {
        let convertedElement;
        if(typeof data[index] === "number") {
             convertedElement = conversionForInteger(data[index]);
        }
        if(typeof data[index] === "string") {
             convertedElement = conversionForString(data[index]);
        }
        if(typeof data[index] === "object") {
             convertedElement = conversionForList(data[index]);
        }
        listConversionArray.push(convertedElement);
    }
    
    listConversionArray.push(suffix);
    const convertedDataForList = listConversionArray.join("");
    
    return convertedDataForList;
}

function encoding(data) {
    switch(typeof data) {
        case "string":
            return conversionForString(data);
        case "number":
            return conversionForInteger(data);
        case "object":
            return conversionForList(data);
    }
}

function encodingTest(data, description, expectedValue){
    const actualValue = encoding(data);
    const symbol = actualValue === expectedValue ? "✅" : "❌";
    const input = `Input : ${data}`;
    const output = `Expected Output : ${expectedValue} \n Actual Output : ${actualValue}`;
    const messageForPassedCase = `${symbol} ${description}`;
    const messageForFailedCase = `${symbol} ${description} \n ${input} \n ${output}`;
    const messageDisplay = symbol === "❌" ? messageForFailedCase : messageForPassedCase; 
   
    console.log(messageDisplay);
}

function encodingTestCase() {
    encodingTest(1, "positive integer", "i1e");
    encodingTest(-42, "negative integer", "i-42e");
    encodingTest("abc", "regular string", "3:abc");
    encodingTest("", "empty string", "0:");
    encodingTest([1,2,3,4], "regular list of numbers", "li1ei2ei3ei4ee");
    encodingTest(["a","b","c"], "regular list of string", "l1:a1:b1:ce");
    encodingTest(["a","b",23], "mixed list of number and string", "l1:a1:bi23ee");
    encodingTest(["a",1,[1,"",["b"]]], "mixed list of number, string, nested list", "l1:ai1eli1e0:l1:beee");
    encodingTest([1,"Two",["Three",4,["Five"]]], "final test case including all cases", "li1e3:Twol5:Threei4el4:Fiveeee");
}

encodingTestCase();
