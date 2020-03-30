// Задание 1:
// Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.

var names = ['Vasia','Petr','Ivan'];

names.map(function(element) {
    var obj = {};
    obj.name = element;

    return obj;
});

// Задание 2:
// Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
// Для решения использовать перебирающий метод массивов.

var arr = ['00', '13', '24'];

function getTime (arr) {
    var time = arr.reduce(function(previousValue, currentItem) {
        return previousValue + ' : ' + currentItem;
    },'Текущее время'); // в качестве параметра по умолчанию

    console.log(time);
}

getTime (arr);

// Задание 3:
// Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой.
// Решение не должно быть "топорным".

function findVowels(str) {
    var count = 0;
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    var arrLetters = str.toLowerCase().split('');

    arrLetters.forEach(function(char){
        if (vowels.indexOf(char) !== -1) {
            count +=1;
        }
    });
    return count;
}

findVowels('Ёжик');

// Задание 4:
// Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
// восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
// вопросительным знакам - убрав их).
// Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
// запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!) регулярное выражение
// в методе split.
//
//     Функция должна работать следущим образом (потестировать на данном тексте):
//     countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
// // Привет, студент: Letters quantity is: 13
// // Студент: Letters quantity is: 7
// // Как дела, студент: Letters quantity is: 14

function countSentencesLetters(str) {

    function getNumberOfLetters(str) {
        var count = 0;
        var letters = ['я','ч','с','м','и','т','ь','б','ю','ф','ы','в','а','п','р','о','л','д','ж','э','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ё'];
        var arrLetters = str.toLowerCase().split('');

        arrLetters.forEach(function(char){
            if (letters.indexOf(char) !== -1) {
                count +=1;
            }
        });
        return count;
    }

    var arrStr = str.split(/\...|\!|\?/).map(function(str1){
        if (str1.length) {
            return str1.trim() + ': Letters quantity is: ' + getNumberOfLetters(str1);
        }
    });

    arrStr.forEach(function(item) {
        console.log(item);
    });

}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');