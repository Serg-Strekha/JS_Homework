// Задание 1:

var a = +prompt('Введите число'),
    b = +prompt('Сколько прибавить?'),
    c = +prompt('Сколько отнять?'),
    d = +prompt('На сколько умножить?'),
    e = +prompt('На сколько разделить?');

var result = (a + b - c) * +d / +e;

alert(
    'Формула: ' + '(' + a + ' + ' + b + ' - ' + c + ')' + ' * ' + d + ' / ' + e + '\n' +
    'Результат: ' + result
);


// Задание 2:

var login = prompt('Ваш логин ?', 'Админ'),
    password;

if (login === 'Админ') {

    password = prompt('Введите пароль');

    if (password === null) {
        alert('Вход отменен');
    } else if (password === 'Чёрный властелин') {
        alert('Добро пожаловать');
    } else {
        alert('Пароль неверен');
    };
} else if (login === null) {
    alert('Вход отменен');
} else {
    alert('Я вас не знаю')
};


// Задание 3:

var login = prompt('Ваш логин');

var message = (login === 'Вася') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : '';
alert(message);


// Задание 4:

// запрос ФИО с проверкой на пустую строку и null и выводом ссобщения в alert
var surname = prompt('Ваша фамилия', 'Иванов(а)');

while (true) {
    if (surname === null) {
    } else if (surname !== '') break;
    alert('Ошибка! Введите данные завново');
    surname = prompt('Ваша фамилия', 'Иванов(а)');
};

var myName = prompt('Ваше имя', 'Евгений(я)');

while (true) {
    if (myName === null) {
    } else if (myName !== '') break;
    alert('Ошибка! Введите данные завново');
    myName = prompt('Ваше имя', 'Евгений(я)');
};


var middleName = prompt('Ваше отчество', 'Иванович(на)');

while (true) {
    if (middleName === null) {
    } else if (middleName !== '') break;
    alert('Ошибка! Введите данные завново');
    middleName = prompt('Ваше отчество', 'Иванович(на)');
};


// Запрос возраста с проверкой на пустую строку, null и NaN. Пришлось использовать функцию, так как не проверялось NaN, нашел только такой способ.

var age = prompt('Ваш возраст');
while (!isNumeric(age)) {
    alert('Ошибка! Введите данные завново');
    age = prompt('Ваш возраст');
};

function isNumeric() {
    return !isNaN(age = parseInt(age)) && isFinite(age);
};

// Запрос через  confirm.

var sex = confirm('Ваш пол мужской?'), // sex =  (sex === true) ? 'мужской':'женкий'; сокращенный вариант.
    retiree;

if (sex === true) {
    sex = 'мужской';
} else {
    sex = 'женкий';
};




// Условие для присваивания значения ПЕНСИОНЕР.

if (age >= 63) {
    retiree = 'Да';
} else if (age >= 58) {
    retiree = 'Да';
} else {
    retiree = 'Нет'
};


alert(
    'ваше ФИО: ' + surname + ' ' + myName + ' ' + middleName + '\n' +
    'ваш возраст в годах: ' + age + '\n' +
    'ваш возраст в днях: ' + age * 364 + '\n' +
    'через 5 лет вам будет: ' + (age + 5) + '\n' +
    'ваш пол: ' + sex + '\n' +
    'вы на пенсии: ' + retiree
);