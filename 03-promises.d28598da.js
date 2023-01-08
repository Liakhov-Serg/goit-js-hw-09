!function(){var o=new Promise((function(o,n){var e=Math.random()>.3;setTimeout((function(){e&&o("Проміс виконався успішно, с результатом (виконан, fulfilled)"),n("Проміс виконався з помилкою (відхилено, rejected)")}),2e3)}));o.then((function(o){console.log(o)}),(function(o){console.log(o)})),console.log(o)}();
//# sourceMappingURL=03-promises.d28598da.js.map
