function Cat(name) {
    var foodAmount = 50;

    var aa = foodAmount;

    function formatFoodAmount(aa) {
        return foodAmount + ' гр.'
    }

    this.feed = function () {
        console.log('Насыпаем в миску (' + formatFoodAmount() + ') корма.')
    };
}

var cat = new Cat();

cat.feed();