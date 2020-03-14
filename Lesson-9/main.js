function Animal(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.name = name;

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return console.log('Недопустимое количество корма.');
        }

        foodAmount = amount;
    };

    var self = this;

    this.feed = function () {
        console.log('Насыпаем в  миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function () {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    }

    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    }
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