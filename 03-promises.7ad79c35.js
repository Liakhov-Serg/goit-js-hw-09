const o=new Promise(((o,e)=>{const l=Math.random()>.3;setTimeout((()=>{l&&o("Проміс виконався успішно, с результатом (виконан, fulfilled)"),e("Проміс виконався з помилкою (відхилено, rejected)")}),2e3)}));o.then((o=>{console.log(o)}),(o=>{console.log(o)})),console.log(o);
//# sourceMappingURL=03-promises.7ad79c35.js.map
