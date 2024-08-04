// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind


const student = {
    name: 'Name',
    speciality: 'Speciality',
    averageScore: 0,
    missedClasses: 0,
    showStudentData(age=20, country="Ukraine") {
        console.log(`
        Name: ${this.name}, 
        Speciality: ${this.speciality}, 
        Average Score: ${this.averageScore}, 
        Missed Classes: ${this.missedClasses},
        Age: ${age},
        Country: ${country}`);
    }
}

const student1 = {
    name: 'Ivan',
    speciality: 'developer',
    averageScore: 7,
    missedClasses: 3
}
const student2 = {
    name: 'Bohdan',
    speciality: 'tester',
    averageScore: 8,
    missedClasses: 4
}
const student3 = {
    name: 'Nataly',
    speciality: 'manager',
    averageScore: 6,
    missedClasses: 2
}

student.showStudentData.call(student1, 22);
student.showStudentData.apply(student2, [, 'Poland']);
student.showStudentData.bind(student3)(25, 'USA');


// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

let cont = document.querySelector('.cont');
let butHtml = document.querySelector('.but-html');
let butCss = document.querySelector('.but-css');
let textHtml = '<p>HTML - HyperText Markup Language</p>';
let textCss = '<p>CSS - Cascading Style Sheets</p> '
butHtml.addEventListener('click', (e)=>{
    cont.innerHTML = textHtml;
})
butCss.addEventListener('click', (e)=>{
    cont.innerHTML = textCss;
})


//--3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

const foodstuff = [
    {
        item: 'banana', 
        price: 30, 
        quantity: 4.5
    },
    {
        item: 'cherry', 
        price: 58, 
        quantity: 1.3
    },
    {
        item: 'orange', 
        price: 89, 
        quantity: 3.4
    }   
]

function shopSum (item, price, quantity) {
    let sum = (Math.round(price * quantity * 100) / 100).toFixed(2);
    return `${item}: ${sum}`;
}

for(value of foodstuff) {
    console.log(shopSum(value.item, value.price, value.quantity));
}
