// Задание 1:

// Вариант 1
function filterNumbersArr(numbers) {
    var newArr = [];

    numbers.forEach(function(item, i, numbers) {
        if (item > 0) {
            newArr[newArr.length] = item;
        }
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// Вариант 2
function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function (number) {
        return number > 0;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// Задание 2:

function getPositiveNumber(numbers) {
    var positiveNumber;

    for (var i = 0; i < numbers.length; i++) {
        var el = numbers[i];

        if (el > 0) {
            return positiveNumber = el;
        }
    }

    return positiveNumber;
}

getPositiveNumber([-1, 0, 2, 34, -2]);

// Задание 3:

function isPalindrome (str) {
    var str2 = str.toLowerCase();
    var str2revers = str2.split('').reverse().join('');

    if (str2 == str2revers) {
        console.log (true);
    } else {
        console.log (false);
    };
}

isPalindrome ('привет');  // вернет false

// Задание 4:

function areAnagrams(a, b) {
    var sortA = a.toLowerCase().split('').sort().join('');
    var sortB = b.toLowerCase().split('').sort().join('');

    if (sortA == sortB) {
        console.log (true);
    } else {
        console.log (false);
    };

}

areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

// Задание 5:

function divideArr (arr, arrSize) {
    var slicedArr = [];

    for (var i = 0; i <arr.length; i +=arrSize) {
        slicedArr.push(arr.slice(i, i + arrSize));
    }

    return console.log(slicedArr);
}


divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);