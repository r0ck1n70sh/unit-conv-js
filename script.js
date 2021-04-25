$('a').each((idx, val) => {
    $(val).mouseover(() => {
        $(val).addClass('active');
    });

    $(val).mouseout(() => {
        $(val).removeClass('active');
    });

    $(val).click(() => {
        $('div').removeClass('div-active');

        let href = $(val).attr('href');
        $(href).addClass('div-active');

        console.log(href);
    });
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
        $('#output-temp-val').text(`Calculated Temperature is: ${outputTempVal} ${outputTempType[0].toUpperCase()}`);
    } catch(e){
        console.error(`${e.name} is ${e.message}`);
    }
    
    console.log(`input val ${inputTempVal}`);
    console.log(`input type ${inputTempType}`);
    console.log(`output val ${outputTempVal}`);
    console.log(`output type ${outputTempType}`);
});
