function pad(arg1, arg2, arg3, arg4){
    let string_size_simbol = arg3 - arg1.length
    if (string_size_simbol >= 1){
        if (arg4 === true){
            console.log(arg2.repeat(string_size_simbol).concat(arg1))
        }
        if (arg4 === false){
            console.log(arg1.concat(arg2.repeat(string_size_simbol)))
        }
    }else{
        console.log(arg1)
    }
}
pad('qwerty', '+', 10, false)