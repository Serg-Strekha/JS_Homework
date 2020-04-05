var block = document.getElementById('block');
var button = document.getElementsByTagName('button')[0];

var newParagraph1 = document.createElement('p');
var newParagraph2 = document.createElement('p');

newParagraph1.innerHTML = 'Привет, переходи по <a href="https://www.google.by/">ссылке 1</a> или <a href="https://www.google.by/">ссылке 2</a>';
newParagraph2.innerHTML = 'Привет, переходи по <a href="https://www.yandex.by/">ссылке 1</a> или <a href="https://www.google.by/">ссылке 2</a>';

block.appendChild(newParagraph1);
block.appendChild(newParagraph2);

var links1 = newParagraph1.children;

button.onclick = function() {
    for (var i = 0; i < links1.length; i++) {
        links1[i].classList.toggle('changed');
    }
}

var links2 = newParagraph2.querySelectorAll('a');

links2.forEach(function(item, j) {
    links2[j].addEventListener('click', function f(event) {
        event.preventDefault();
        var key = links2[j].text;
        var val = links2[j].getAttribute('href');
        localStorage.setItem(key, JSON.stringify({path : val}));
        alert('Информация о ссылке сохранена');
        this.removeEventListener('click', f);

        this.addEventListener('click', function d(event) {
            event.preventDefault();
            for (var i = 0; i < localStorage.length; i++) {
                var k = localStorage.key(i);
                if (links2[j].text === k) {
                    alert(JSON.parse(localStorage.getItem(links2[j].text)).path)
                }
            }
        })
    });
});

window.onunload = function () {
    localStorage.clear();
}