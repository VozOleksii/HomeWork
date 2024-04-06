var units_of_measuremen = 'години';
var amount = 4;
if (Number(amount)){
    switch (units_of_measuremen){
        case 'кілометри':
            let count_km = amount * 1000;
            console.log(amount + 'км. це ' + count_km + 'м.');
            break;
        case 'години':
            let count_god = amount * 60;
            console.log(amount + 'год. це ' + count_god + 'хв.');
            break;
        case 'кілограми':
            let count_kg = amount * 1000;
            console.log(amount + 'кг. це ' + count_kg + 'грм.');
            break;
        default:
            console.log(units_of_measuremen + ' - не валідна одиниця виміру. Допустимі: "кілометри", "години", "кілограми"');
    }
}else{
    console.log(amount + ' - не є числом')
}