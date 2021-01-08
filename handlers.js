import { getSum, getDiff, getMult, getDiv } from './utils.js';

const operationField = document.getElementById('operation-input-1');
const operationField2 = document.getElementById('operation-input-2');

const showOperationResult = document.getElementById('operation-results')

export function addClickHandler(){
    const fieldValue1 = Number(operationField.value);
    const fieldValue2 = Number(operationField2.value);

    const sum = getSum(fieldValue1,fieldValue2);

    showOperationResult.textContent = 'RESULT: ' + sum;
    
}

export function diffClickHandler(){
    const fieldValue1 = Number(operationField.value);
    const fieldValue2 = Number(operationField2.value);

    const diff = getDiff(fieldValue1,fieldValue2);

    showOperationResult.textContent = 'RESULT: ' + diff;

}

export function multClickHandler(){
    const fieldValue1 = Number(operationField.value);
    const fieldValue2 = Number(operationField2.value);

    const mult = getMult(fieldValue1,fieldValue2);

    showOperationResult.textContent = 'RESULT: ' + mult;

}

export function divClickHandler(){
    const fieldValue1 = Number(operationField.value);
    const fieldValue2 = Number(operationField2.value);

    const div = getDiv(fieldValue1,fieldValue2);

    showOperationResult.textContent = 'RESULT: ' + div;

}