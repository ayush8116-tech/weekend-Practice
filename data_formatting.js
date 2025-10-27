function conversionForInteger(data) {
    const numberConversionArray = [];
    const prefix = "i";
    const suffix = "e";
    numberConversionArray.push(prefix,data,suffix);
    const convertedDataForInteger = numberConversionArray.join("");
    
    return convertedDataForInteger;
}


function encoding(data) {
    return conversionForInteger(data);
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
    encodingTest(1, "conversion of positive integer", "i1e");
    encodingTest(-42, "conversion of negative integer", "i-42e");
}

encodingTestCase();
