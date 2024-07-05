// -1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
let checkAge = (age) => {
    let answer = (age > 18) ? true : confirm('Батьки дозволили?'); 
    return answer;
}
console.log(checkAge(18));


// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
function min (a, b) {
    if (typeof a == "number" && typeof b == "number") {
        if (a < b) return a;
        else if (b < a) return b;
        else  console.log('Числа рівні');
    }
    else console.log('Один або два аргументи є не число');  
}
console.log(min(4, 3));


// 3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Ви згодні?",
    () => { alert("Ви погодились."); },
    () => { alert("Ви скасували виконання."); }
);


