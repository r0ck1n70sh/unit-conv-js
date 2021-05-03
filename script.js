const $navBarLinks = $('a');

$navBarLinks.each((idx, navBarItem) => {
    const showDivCSSClass = 'div-active';
    const selfDivId = $(navBarItem).attr('href');
    
    $(navBarItem).click(() => {
        $('.section').each((i, subSectionId) => {
            $(subSectionId).removeClass(showDivCSSClass);
        });

        $(selfDivId).addClass(showDivCSSClass);
    });
});

$('#btn-len-cal').click(() => {
    let inputLenVal = parseInt($('[name=input-len-val]').val());
    let inputLenType = $('[name=input-len-type]').val()[0];
    
    let lenMeter;
    switch(inputLenType){
        case 'meter':
            lenMeter = inputLenVal;
            break;
        case 'feet':
            lenMeter = inputLenVal / 3.281;
            break;
        case 'kilometer':
            lenMeter = inputLenVal * 1000;
            break;
        default:
            throw new Error('invalid input');
    }
    
    let outputLenType = $('[name=output-len-type]').val()[0];
    let outputLenVal;
    switch(outputLenType){
        case 'meter':
            outputLenVal = inputLenVal;
            break;
        case 'feet':
            outputLenVal = inputLenVal * 3.281;
            break;
        case 'kilometer':
            outputLenVal = inputLenVal / 1000;
            break;
        default:
            throw new Error('invalid output');
    }

    try{
        $('#output-len-val').text(`Calculated Temperature is: ${outputLenVal.toFixed(4)} ${outputLenType}`);
    } catch(e){
        console.error(`${e.name} is ${e.message}`);
    }
});

$('#btn-weight-cal').click(() => {
    let inputWeightVal = parseInt($('[name=input-weight-val]').val());
    let inputWeightType = $('[name=input-weight-type]').val()[0];
    
    let weightGram;
    switch(inputWeightType){
        case 'gram':
            weightGram = inputWeightVal;
            break;
        case 'pound':
            weightGram = inputWeightVal * 454;
            break;
        case 'ounce':
            weightGram = inputWeightVal * 16;
            break;
        default:
            throw new Error('invalid input');
    }
    
    let outputWeightType = $('[name=output-weight-type]').val()[0];
    let outputWeightVal;
    switch(outputWeightType){
        case 'gram':
            outputWeightVal = weightGram;
            break;
        case 'pound':
            outputWeightVal = weightGram / 454; 
            break;
        case 'ounce':
            outputWeightVal = weightGram / 16;
            break;
        default:
            throw new Error('invalid output');
    }

    try{
        $('#output-weight-val').text(`Calculated Temperature is: ${outputWeightVal.toFixed(4)} ${outputWeightType}`);
    } catch(e){
        console.error(`${e.name} is ${e.message}`);
    }
});

$('#btn-temp-cal').click(() => {
    let inputTempVal = parseInt($('[name=input-temp-val]').val());
    let inputTempType = $('[name=input-temp-type]').val()[0];
    
    let tempCelsius;
    switch(inputTempType){
        case "celsius":
            tempCelsius = inputTempVal;
            break;
        case 'fahrenheit':
            tempCelsius = 5 * (inputTempVal - 32) / 9;
            break;
        case 'kelvin':
            tempCelsius = inputTempVal - 273;
            break;
        default:
            throw new Error('invalid input');
    }
    
    let outputTempType = $('[name=output-temp-type]').val()[0];
    let outputTempVal;
    switch(outputTempType){
        case 'celsius':
            outputTempVal = tempCelsius;
            break;
        case 'fahrenheit':
            outputTempVal = (tempCelsius * 9) / 5 + 32; 
            break;
        case 'kelvin':
            outputTempVal = tempCelsius + 273;
            break;
        default:
            throw new Error('invalid output');
    }

    try{
        $('#output-temp-val').text(`Calculated Temperature is: ${outputTempVal.toFixed(4)} ${outputTempType[0].toUpperCase()}`);
    } catch(e){
        console.error(`${e.name} is ${e.message}`);
    }
});


