/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */
let myArray = [1, "two", false];
console.log(myArray.length);
myArray.push(null);
myArray.push(123, 213);
console.log(myArray);
console.log(myArray.length);
