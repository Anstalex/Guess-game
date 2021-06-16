'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
const start = function () {
   let count = 0;
    const randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber); //Чтоб было легче угадывать
    const compareNumbers = function () {
        let answer = prompt('Угадай число от 1 до 100');
        if (answer === null) {
            return alert('Игра окончена!');
        }

        const answerToNumber = +answer;
        let handler = function (text) {
            if ((10 - count)>0 && (10 - count)<2){
            alert(text+' попытка');
            }else if((10 - count)>1 && (10 - count)<=4){
                alert(text+' попытки');
            }else if((10 - count)>4){
                alert(text+' попыток');
        }
            compareNumbers();

        }
        count++;
        if (count === 10) {
            let propose = confirm('Попытки кончились,сыграть ещё раз?');
            if (propose) {
                start();
            } else {
                alert('Игра окончена!');
            }
        } else if (answerToNumber > randomNumber && answerToNumber >= 1 && answerToNumber < 100) {
            handler('Загаданное число меньше, у вас осталось: '+ (10 - count));
        } else if (answerToNumber < randomNumber && answerToNumber >= 1 && answerToNumber < 100) {
            handler('Загаданное число больше, у вас осталось: '+ (10 - count));
        } else if (!isNumber(answerToNumber) || answerToNumber < 1 || answerToNumber > 100) {
            handler('Введите число от 1 до 100!У вас осталось: '+ (10 - count));
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
