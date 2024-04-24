// ДЗ2 сума чисел від 1 до 100 включно, які не кратні 3.
let sum = 0
for (let x = 0; x <= 100; x++) {
        if (x % 3 === 0) continue;
        sum = sum + x;
    }
console.log(sum);