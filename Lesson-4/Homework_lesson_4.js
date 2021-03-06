// Задание 1
function  pow (x, n) {
    var y = 1;
    for (var i=0; i<n; i++){
        y *= x;
    }
    return y;
}

var x = +prompt('Введите число');
var n = +prompt('В какую степень возвести?');


while (true) {
    if (n < 1 || parseInt(n) != n) {
        alert('Введите натуральное число, т.е. от 1 и больше');
    } else break;
    n = +prompt('В какую степень возвести?');

}
pow (x, n);

// Задание 2

// С использованием цикла
function sumTo(n){
    var sum = n;

    for(i=0; i<n; i++){
        sum +=i;
    }
    return sum;
}

sumTo(4);

// С использованием рекурсии

function sumTo(n){

    if (n > 1){
        return n + sumTo(n -1);
    } else {
        return n;
    }

}

sumTo(4);

// с использованием формулы для суммы арифметической прогрессии

function sumTo(n){
    var sum = (1+n)*n/2;
    return sum;
}

sumTo (4);


/*
 Какой вариант решения самый быстрый? Самый медленный? Почему?
 ОТВЕТ:
        В данных функциях самый быстрый способ с использованием формулы для суммы арифметической прогрессии, т.к. используется
    простое арифметическое выражение, или (наверное так не превильно говорить) используется одна итерация,
    что в цикле выполняется много раз и в результате времени на выполнение операции надо больше.
    Что касается сравнения цикла и рекурсии, то еще раз погуглив нашел инфу что итерация обладает рядом преимуществ: она требует меньше памяти (которое при рекурсии
    занимает распухающий стек) + меньше машинного времени (опять же рекурсия тратит его на управление стеком).



Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему?
 ОТВЕТ:
    Максимальная глубина рекурсии ограничена движком JavaScript. Точно можно рассчитывать на 10000 вложенных вызовов,
    некоторые интерпретаторы допускают и больше, но для большинства из них 100000 вызовов – за пределами возможностей.
    Существуют автоматические оптимизации, помогающие избежать переполнения стека вызовов («оптимизация хвостовой рекурсии»),
    но они ещё не поддерживаются везде и работают только для простых случаев.
 */


// Задание 3

var arr = [
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, [{name: 'serg'}]],
    1, 8
];

function treeSum(arr) {
    var item = 0;
    for (var j = 0; j < arr.length; j++) {

        if (typeof arr[j] === 'number' && !isNaN(arr[j])){
            item += arr[j];
        } else if (typeof arr === 'object' && arr.length) {
            item += treeSum(arr[j]);
        }

    }
    return item;
}

treeSum(arr);