# Week13
Привет!
Ответы на Вопросы

1. Какие бывают варианты объявления переменных?

Переменную можно задать через ключевое слово var, через ключевое слово let. А также можно прсото присвоить переменной новое значение, после обьявления переменной:
 let x=5;
 x=6; -новое значение переменной.

2. Как можно вывести сообщение "Hello World" с помощью JavaScript?
    
    ```jsx
    msgBox('Hello World');
    console.log('Hello World');
    msg('Hello World');
    alertBox('Hello World');
    ```
    

    console.log('Hello World'); Выводит сообщение в консоль  разработчика Hello World

3. Что выведет этот скрипт?
 let name = "Ilya"
alert (`hello ${1}`);      //   hello 1  
alert (`hello ${"name"}`);  // hello name  
alert (`hello ${name}`);   //  hello Ilya  
 
    
    
4. Какое значение будет в *z*?
    
    ```jsx
    let x = 5;         
    let y = 2;        
    let z = x + y;
    console.log(z);
    ```  
    вернёт 7
    
5. Какими тремя способами можно подключить JavaScript код?
- Внутри любого тега 
- C помощью скрипта.Скрипт пишется внтури тега <script></script> в <head> или <body>
- C помощью скрипта. Скрипт подключается отдельным файлом Index.js, к которому прописывается <script src="index.js"></script>.

6. Есть ли какая-то разница между записями `typeof str` и `typeof(str)`?


Нет)

7. Что вернет код? 
    
    ```jsx
    function showX(x)
    { 
    	return x;
    }
    console.log(showX(28));
    ```


Вернёт 28

8. Какой результат будет у выражений ниже?
    
    ```jsx
    "" + 1 + 0
    "" - 1 + 0
    true + false
    6 / "3"
    "2" * "3"
    4 + 5 + "px"
    "$" + 4 + 5
    "4" - 2
    "4px" - 2
    7 / 0
    "  -9  " + 5
    "  -9  " - 5
    null + 1
    undefined + 1
    " \t \n" - 2 
    ```

Undefined
    
9. Что будет в x?
    
    ```jsx
    x = 5; 
    x = 2;
    console.log(x);
    ```
2

10. Что будет в x?
x = 5; 
x -= 2;
console.log(x);

3


Практическое задание.

1. 
let x=40000;
let y=22000;
console.log(x+y);

VM86:3 62000


2. 
let x='Владивосток';
let y=' 2000';
console.log(x+y);

VM161:3 Владивосток 2000

3. 
let x=128;
let y=254;
let a=137;
let b=201;
console.log(x+y+a+b);

720

4. 
let x=2;
console.log(2**5);

32

5. 
let x='Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!';
console.log(x);

6. 
const greetings = 'Привет';
const name = 'Кот';
const newString = greetings + ',' + ' ' + name;
console.log(newString);

Привет, Кот