var table = document.getElementById('table');

table.addEventListener('click', function func(event) {
    var target = event.target;

    while (target != table) {
        if (target.tagName == 'TD') {
            addInputInTd(target);
            return;
        }
        target = target.parentNode;
    }

});

function addInputInTd(td) {
    var addInput = document.createElement('input');
    addInput.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(addInput).focus();

    addInput.addEventListener('blur', function () {
        td.innerHTML = this.value;
        td.addEventListener('click', func);
    });
}


function addRow(event) {
    event.stopImmediatePropagation();

    var tableBody=document.getElementById("tableBody");
    var newRow=document.createElement("tr");
    for (var i=0; i<3; i++) {
        var newCell=document.createElement("td");
        newRow.appendChild(newCell);
    }
    tableBody.appendChild(newRow);
}

var btn=document.getElementById('btn');
btn.addEventListener('click', addRow, false);



