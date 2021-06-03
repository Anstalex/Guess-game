'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const start = function () {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber); //Чтоб было легче угадывать
    const compareNumbers = function () {
        let answer = prompt('Угадай число от 1 до 100');
        if (answer === null) {
            return alert('Игра окончена!');
        }

        const answerToNumber = +answer;
        let handler = function (text) {
            alert(text);
            compareNumbers();
        }

        if (answerToNumber > randomNumber && answerToNumber > 1  && answerToNumber < 100) {
            handler('Загаданное число меньше');
        } else if (answerToNumber < randomNumber && answerToNumber > 1  && answerToNumber < 100) { 
            handler('Загаданное число больше');
        } else if (!isNumber(answerToNumber) || answerToNumber < 1 || answerToNumber > 100) {
            handler('Введите число от 1 до 100!');
        } else if (answerToNumber === randomNumber) {
            let propose = confirm('Поздравляю, Вы угадали, ещё раз?');
            if (propose) {
                start();
            } else {
                alert('Игра окончена!');
            }
        } else if (!answer) {
            alert('Игра окончена!');
        }
    }

    compareNumbers();
}
start();
