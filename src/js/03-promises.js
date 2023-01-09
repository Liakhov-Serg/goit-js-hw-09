function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.3;

//   setTimeout(() => {
//   if (canFulfill) {
//     resolve(`Проміс виконався успішно, с результатом (виконан, fulfilled)`);
//   }
//   reject(`Проміс виконався з помилкою (відхилено, rejected)`);
// }, 2000);
  
// });
// // Виконали планіровку - відкладені виклики
// promise
// .then(onFulfilled)
// .then(x => {
//   console.log(x);
//   return 10;
// })
// .then(y => {
//   console.log(y);
// })
// .catch(error => console.log(error))
// .finally(() => console.log(`В кожному випадку`));
  


// console.log(promise);

// function onFulfilled(result) {
//   console.log(`onFulfilled -> onFulfilled`);
// }

const makeOrder = dish => {
  
  return Promise.resolve(`Ось ваше замовлення`);
      }
     

makeOrder(`пиріжок`).then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log(`onMakeOrderSuccess`);
  console.log(result);
}
function onMakeOrderError(error) {
  console.log(`onMakeOrderError`);
  console.log(error);
}