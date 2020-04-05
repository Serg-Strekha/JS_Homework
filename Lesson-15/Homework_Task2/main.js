var btn = document.getElementById('btn');
btn.disabled = true;

var x = document.getElementById('x');
var y = document.getElementById('y');

function checkParams(qualifiedName) {
    xVal = x.value.trim();
    yVal = y.value.trim();

    if (xVal.length !== 0 && yVal.length !== 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

x.onkeyup = checkParams;
y.onkeyup = checkParams;


btn.onclick = function f(newChild, oldChild) {
    var container = document.querySelector('.container'),
        table = document.createElement('table'),
        newTable = container.appendChild(table),
        tBody = document.createElement('tbody'),
        newTBody = table.appendChild(tBody),
        firstTable = document.querySelector("table"),
        x = +document.getElementById('x').value,
        y = +document.getElementById('y').value,
        flag = true;

    if (isNaN(x) || isNaN(y)) {
        alert('Ошибка! Введите число от 1 до 10');
    } else if (x < 1 || x > 10 || y < 1 || y > 10) {
        return alert('Ошибка! Введите число от 1 до 10');
    }

    for (var i = 0; i < y; i++) {
        var row = document.createElement('tr'),
            newRow = newTBody.appendChild(row);
        for (var j = 0; j < x; j++) {
            if (j === 0 && x % 2 === 0) flag = !flag;
            var col = document.createElement('td');

            if (flag) {
                col.className = 'color_black'
            }
            newRow.appendChild(col);
            flag = !flag;
        }
    }

    if (firstTable == null) {
        return container.appendChild(table);
    } else {
        var newTable2 = container.appendChild(table);
        container.replaceChild(newTable2, firstTable);
    }

    function reverseColor() {
        var tds = document.querySelectorAll('td');
        for (var k = 0; k < tds.length; k++) {
            tds[k].classList.toggle('color_black');
        }
    }

    firstTable.addEventListener('click', reverseColor);
    newTable2.addEventListener('click', reverseColor);
}





