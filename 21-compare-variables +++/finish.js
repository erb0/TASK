/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = "5";

let result1 = parseInt(myVariable1) <= parseInt(myVariable2);

console.log(result1);

myVariable1 = "20";
myVariable2 = 100;

let result2 = +myVariable1 <= +myVariable2;

console.log(result2);

// Напишите код здесь
