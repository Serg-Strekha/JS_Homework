//Задание 1:

function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + 'гр.';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return console.log('Недопустимое количество корма.');
    }

    this._foodAmount = amount;
}

Animal.prototype.feed = function () {
    console.log('Насыпаем в  миску ' + this.dailyNorm() + ' корма.');
}

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}


var barsik = new Cat('Барсик');

console.log(barsik.name);

barsik.dailyNorm();
barsik.feed().stroke();

barsik.dailyNorm(600);
barsik.stroke().feed().stroke();

barsik.dailyNorm(250);
barsik.feed().stroke().feed().stroke();

barsik = null;


// Задание 2:

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};


function deepClone(obj) {
    var copy;
    if (null == obj || "object" != typeof obj) return obj;

    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        copy = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) copy[key] = deepClone(obj[key]);
        }
        return copy;
    }

}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// Задание 3:

function deepEqual(a, b) {
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (Object.keys(a).length !== Object.keys(b).length) return false;
        for (var key in a) if (!deepEqual(a[key], b[key])) return false;
        return true;
    } else return a === b
}

console.log(deepEqual(initialObj, clonedObj));
