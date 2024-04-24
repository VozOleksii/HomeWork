function my_is_nan(argument){
    if (Number(argument) || argument === null || argument == 0){
        console.log('false : ' + typeof argument)
    }else{
        console.log('true : ' + typeof argument)
    } 
}

my_is_nan(NaN); // true
my_is_nan(undefined); // true
my_is_nan({}); // true

my_is_nan(true); // false
my_is_nan(null); // false
my_is_nan(37); // false

// strings
my_is_nan("37"); // false: "37" преобразуется в число 37 которое не NaN
my_is_nan("37.37"); // false: "37.37" преобразуется в число 37.37 которое не NaN
my_is_nan(""); // false: пустая строка преобразуется в 0 которое не NaN
my_is_nan(" "); // false: строка с пробелом преобразуется в 0 которое не NaN
my_is_nan("37,5"); // true

// Даты
my_is_nan(new Date()); // false
my_is_nan(new Date().toString()); // true

// Пример почему использование my_is_nan не всегда уместно
my_is_nan("blabla"); // true: "blabla" преобразовано в число.
// При парсинге преобразуется в число при неудаче возвращает NaN