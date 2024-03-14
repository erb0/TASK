/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: "Audi",
    price: 10000,
    isAvailableForSale: true,
  },
  {
    carBrand: "BMW",
    price: 15000,
    isAvailableForSale: true,
  },
];

const newCar = {
  carBrand: "Nissan",
  price: 25000,
  isAvailableForSale: false,
};

cars.push(newCar);

cars.forEach((e) => console.log(e.carBrand));

console.log(cars);
