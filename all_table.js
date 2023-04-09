#!/usr/bin/env node

import readlineSync from "readline-sync";
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrMult = [...arrNumbers.sort(() => Math.random() - 0.5)];
const arrDev = [...arrNumbers.sort(() => Math.random() - 0.5)];

let mult1 = 1; //= readlineSync.question(
 // "Привет! На какое число будем проверять таблицу умножения?"
//);

let mark = 0;
let mult2 = 1;
let answer;

for (let i = 1; i < 40; i++) {
  const devider = i % 2;
  mult1 = Math.round(Math.random()*10);
  switch (devider) {
    case 0:
      mult2 = arrMult.pop();
      answer = readlineSync.question(`${mult1} * ${mult2}    `);
      if (answer === String(mult1 * mult2)) {
        console.log("МОЛОДЕЦ, ответ ВЕРНЫЙ !!!");
      } else {
        console.log("Ответ НЕВЕРНЫЙ! Правильный ответ: ", mult1 * mult2);
        mark += 1;
      }
      break;
    case 1:
      mult2 = arrDev.pop();
      answer = readlineSync.question(`${mult1 * mult2} / ${mult1}    `);
      if (answer === String(mult2)) {
        console.log("МОЛОДЕЦ, ответ ВЕРНЫЙ !!!");
      } else {
        console.log(
          "Ответ НЕВЕРНЫЙ! Правильный ответ: ",
          (mult1 * mult2) / mult1
        );
        mark += 1;
      }
      break;
  }
}

if (mark <= 1) {
  console.log("Молодец Глеб ПЯТЕРКА!!!");
} else if (mark === 2) {
  console.log("Хорошо Глеб ЧЕТВЕРКА!");
} else if (mark > 2 && mark <= 4) {
  console.log("Так себе Глеб ТРОЙКА!");
} else {
  console.log("ФУУУУ Глеб ДВОЙКА!!!");
}
