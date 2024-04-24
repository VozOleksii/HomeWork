function test_probability(count){
    let sum_couples = 0
    let sum_not_couples = 0
    let persent = 100 / count
    for (let i = 0; i < count; i++){
        let rnd = Math.floor(Math.random() * (1000 - 100) + 100);
        if (rnd % 2 === 0){
            sum_couples += 1;
        }else {
            sum_not_couples += 1;
        }
    }
    console.log('Кількість згенерованих чисел: ' + count);
    console.log('Парних чисел: ' + sum_couples);
    console.log('Не парних чисел: ' + sum_not_couples);
    console.log('Відсоток парних до не парних: ' + Math.round(sum_couples * persent) + '%' + Math.round(sum_not_couples * persent))
}
test_probability(1000)