/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

const myMassegeArr = [
  "Сообщение номер 1",
  "Сообщение номер 2",
  "Сообщение номер 3",
  "Сообщение номер 4",
  "Сообщение номер 5",
];

const myFn = (myMassegeArr) => myMassegeArr.forEach((e) => console.log(e));

setInterval(myFn, 2000);
