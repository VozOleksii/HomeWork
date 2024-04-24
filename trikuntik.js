// ДЗ1 прямокутний трикутник із зірочок (1 спрсіб)
function drawTriangle(a, b){
    for (a; a >= 1; a --){
        console.log(b);
        b += ' *';
    } 
    return
}
drawTriangle(10, '*');

// ДЗ1 прямокутний трикутник із зірочок (2 спосіб)
function drawTriangle(a, b){
    let i = 1;
    while (i <= a) {
        console.log(b);
        b += ' *';
        a--
    }
}
drawTriangle(10, '*');