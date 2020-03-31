var block = document.getElementById('block');
var button = document.getElementsByTagName('button')[0];

var newParagraph1 = document.createElement('p');
var newParagraph2 = document.createElement('p');

newParagraph1.innerHTML = 'Привет, переходи по <a href="https://www.google.by/">ссылке 1</a> или <a href="https://www.google.by/">ссылке 2</a>';
newParagraph2.innerHTML = 'Привет, переходи по <a href="https://www.google.by/">ссылке 1</a> или <a href="https://www.google.by/">ссылке 2</a>';

block.appendChild(newParagraph1);
block.appendChild(newParagraph2);

var links1 = newParagraph1.querySelectorAll('a');

button.onclick = function() {
    links1.forEach(function(item, i) {
        links1[i].classList.toggle('changed');
    });
}

var links2 = newParagraph2.querySelectorAll('a');

links2.forEach(function(item, j) {
    links2[j].addEventListener('click', function(event) {
        event.preventDefault();
        alert(links2[j].getAttribute('href'));
    });
});
