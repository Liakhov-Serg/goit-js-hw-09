function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.3;

  setTimeout(() => {
  if (canFulfill) {
    resolve(`Проміс виконався успішно, с результатом (виконан, fulfilled)`);
  }
  reject(`Проміс виконався з помилкою (відхилено, rejected)`);
}, 2000);
  
});
// Виконали планіровку - відкладені виклики
promise.then(
  result => {
  console.log(result);
},
error => {
  console.log(error);
},
);

console.log(promise);