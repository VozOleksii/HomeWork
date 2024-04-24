// ДЗ 3 фунція зведення в спупінь
function pow(x, y){
    let result = 1
    for (let a = 1; a <= y; a++){
        result = result * x
    }
    console.log(result)
}
pow(5, 3);