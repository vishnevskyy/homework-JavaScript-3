// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x=prompt('Enter');
// if (x!=0) {
//   console.log('+')
// } else{
//   console.log('-')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time=prompt("Enter time(59>time>0:")
// if (0<=time && time<=15){
//   console.log('1')
// }else if (15<time && time<=30){
//   console.log('2')
// }else if(30<time && time<=45){
//   console.log('3')
// }else if(45<time && time<=59){
//   console.log(4)
// }else console.log('vvedeno nevirno time:')

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('Enter day(0>day>31):');
// if (0<day && day<=10){
//   console.log('1')
// }else if (10<day && day<=20){
//   console.log('2')
// }else if (20<day && day<=31){
//   console.log('3')
// }else console.log('vvedeno nevirno day')

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let x=prompt('Enter number of day');
// switch (x){
//   case '1':
//     console.log('monday');
//     break;
//   case '2':
//     console.log('tuesday');
//     break;
//   case '3':
//     console.log('wednesday');
//     break;
//   case '4':
//     console.log('thursday');
//     break;
// case '5':
//   console.log('friday');
//   break;
// case '6':
//   console.log('saturday');
//   break;
// case '7':
//   console.log('sunday');
//   break;
//   default:
//     console.log('vvedeno nevirno znachennya');
// }

//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let x1=prompt('Enter fist number:');
// let x2=prompt('Enter second number:');
// if(x1>x2){
//   console.log(x1+'>'+x2);
// }else if(x2>x1){
//   console.log(x2+'>'+x1);
// }else console.log(x1+'='+x2);

//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x =32;
console.log(x ||'default');


