var transFunc  = (jsonData, funcName) => {
    if(jsonData[funcName]){
        console.log('jsonData[name].value',jsonData[funcName].value);
        return jsonData[funcName].value;
    } else {
        return funcName;
    }
}

var transInput  = (jsonData, funcName, inputName) => {
    console.log(jsonData,funcName, inputName);
    if(!jsonData[funcName]){
        return inputName;
    }
    if(!jsonData[funcName].inputs) {
        return inputName;
    } else if (jsonData[funcName].inputs[inputName]) {
        return jsonData[funcName].inputs[inputName];
    } else {
        return inputName;
    }
    
    
}

export {transFunc,transInput}