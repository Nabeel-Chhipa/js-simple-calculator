const add = () => {
    let userInputOne = document.querySelector('#add_input_1').value;
    let userInputTwo = document.querySelector('#add_input_2').value;
    let result = +userInputOne + +userInputTwo;
    document.querySelector('#result-add').innerHTML = result;
}

const subtract = () => {
    let userInputOne = document.querySelector('#subtract_input_1').value;
    let userInputTwo = document.querySelector('#subtract_input_2').value;
    let result = +userInputOne - +userInputTwo;
    document.querySelector('#result-sub').innerHTML = result;
}

const multiply = () => {
    let userInputOne = document.querySelector('#multiply-input_1').value;
    let userInputTwo = document.querySelector('#multiply-input_2').value;
    let result = +userInputOne * +userInputTwo;
    document.querySelector('#result-mul').innerHTML = result;
}

const divide = () => {
    let userInputOne = document.querySelector('#divide_input_1').value;
    let userInputTwo = document.querySelector('#divide_input_2').value;
    let result = +userInputOne / +userInputTwo;
    document.querySelector('#result-divide').innerHTML = result;
}