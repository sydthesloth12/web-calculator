function addNumbers() {
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var operator = document.getElementById('operator').value

    if (operator === "+") {
        var answer = Number(firstNumber) + Number(secondNumber);

    } else if (operator === "-") {
        var answer = Number(firstNumber) - Number(secondNumber);
    } else if (operator === "*") {
        var answer = Number(firstNumber) * Number(secondNumber);
    } else if (operator === "/") {
        var answer = Number(firstNumber) / Number(secondNumber);
    }

    document.getElementById('answerBox').innerHTML = answer
}

function clearNumbers() {
    document.getElementById('firstNumber').value = " "
    document.getElementById('secondNumber').value = " "
    document.getElementById('answerBox').innerHTML = " "
}