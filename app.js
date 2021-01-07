const operationField = document.getElementById('operation-input-1');
const operationField2 = document.getElementById('operation-input-2');

const addButton = document.getElementById('addition-button');
const subButton = document.getElementById('subtraction-button');
const multButton = document.getElementById('multiplication-button');
const divButton = document.getElementById('devision-button');

const operationResults = document.getElementById('operation-results');


function showResult(result) {
    operationResults.textContent = "RESULT: " + result;
}

addButton.addEventListener('click', () => {
    const fieldValue1 = operationField.value;
    const fieldValue2 = operationField2.value;
    
    showResult(Number(fieldValue1) + Number(fieldValue2));

});

subButton.addEventListener('click', () => {
    const fieldValue1 = operationField.value;
    const fieldValue2 = operationField2.value;
    
    showResult(Number(fieldValue1) - Number(fieldValue2));

});

multButton.addEventListener('click', () => {
    const fieldValue1 = operationField.value;
    const fieldValue2 = operationField2.value;
    
    showResult(Number(fieldValue1) * Number(fieldValue2));

});

divButton.addEventListener('click', () => {
    const fieldValue1 = operationField.value;
    const fieldValue2 = operationField2.value;
    
    showResult(Number(fieldValue1) / Number(fieldValue2));

});
