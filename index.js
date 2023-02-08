// 1
let x=40000;
let y=22000;
console.log(x+y);

// 2
let c='Владивосток';
let d=2000;
console.log(c+' '+d);


// 3
let e=128;
let f=254;
let a=137;
let b=201;
console.log(e+f+a+b);

// 4
let g=2;
console.log(g**5);


// 5
let text='Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!';
console.log(text);

// 6
const greetings = 'Привет';
const name = 'Кот';
const newString = greetings + ',' + ' ' + name;
console.log(newString);

// 7
let time=null;
time=34;
let p='Старт поездки. Осталось минут: ';
console.log(p + time);
p='Немного сторис в соцсетях. Осталось минут: '
console.log(p + time);
time -=10;
p='Немного не новостей, но событий. Осталось минут: '
console.log(p + time);
time=0;
p='Вы приехали. Добро пожаловать в Москву';
console.log(p);


// 8
let _fahrenheit_=451;
let _celsius_=(_fahrenheit_ - 32) / 1.8;
result=`${_fahrenheit_} градуса по Фаренгейту — это ${_celsius_} градуса по Цельсию.`
console.log(result);



// *** Задание под звездочкой

let deposit =30000;
const info ='Ваш депозит на начало расчётного периода составлял ';
const rubl =' руб.';
console.log(info + deposit + rubl);
let rate =18.5;
const proc ='%';
console.log('Согласно вашему тарифу, вам была присвоена ставка '+ rate + proc);
let growth = 150;
deposit =30150;
console.log('К концу расчётного периода прирост составил ' + growth + rubl + ', и на данный момент ваш депозит составляет ' + deposit + rubl)
let xxx =700;
rate =7;
let info2='Через год у вас будет';
let inforu=' руб. на счету';
let massage=`${info2}  ${Number(xxx) + (Number(xxx)/100*rate)} ${inforu} `;
console.log(massage);