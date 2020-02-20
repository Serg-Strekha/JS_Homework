//Задание 1

var style = ['Джаз' , ' Блюз '];
    style.push(' Рок-н-Ролл');
    style[style.length-2] = ' Классика';
    alert(style.shift());
    style.unshift(' Рэп',' Регги')
    alert(style);

// Задание 2

// Способ 1

for (var i=1; i<=10; i++){
if (i % 2 !== 0) continue;

alert(i);
}

// Сбособ 2

for (var i=1; i<=10; i++){
if (i % 2 == 0){
alert(i);
};
}

// Способ 3

for (var i=2; i<=10; i+=2){

alert(i);

}

// Задание 3 

var obj = {name : 'мфынф'};

function isEmpty(obj){
    
    for( var k in obj){
    return false;
}
    return true;
}

isEmpty(obj);


// Задение 4

var arr = [];

    while(true) {
        var a = prompt('Введите число');
        a = parseFloat(a);
            if (isNaN(a)) break;
        arr[arr.length] = a;
};

function arrSum(arr){
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    alert('Сумма = ' + sum);
}
arrSum(arr);

// Задание 5

outer:
    for (var i=2; i<=10; i++){

        for (var b=2; b<i; b++){
            if (i % b == 0) continue outer;

        };
        alert(i);
    };
