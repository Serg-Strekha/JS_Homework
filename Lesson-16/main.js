var btn = document.getElementById('btn'),
    tab,
    tabContent,
    users;

btn.addEventListener('click', getUsers);

function getUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onload = function () {
        var statusType = +String(this.status)[0];

        if (statusType === 2) {
            users = JSON.parse(this.response).data
        } else {
            var pageContent = document.getElementById('page-content');
            var infoError = document.createElement('div');
            infoError.className = 'info__error';
            pageContent.appendChild(infoError);
            infoError.innerHTML = '<span>Ошибка </span>' + this.status ;
            console.log(this.status);
            return
        }

        for (var i = 1; i < users.length + 1; i++) {
            var usersTabs = document.body.querySelector('.users-tabs');
            var newUsersTab = document.createElement('div');
            newUsersTab.className = 'tab';
            usersTabs.appendChild(newUsersTab);
            newUsersTab.innerHTML = 'User ' + i;
        }

        for (var j = 0; j < users.length; j++) {
            var infoBlock = document.body.querySelector('.info-block');
            var newInfoBlocks = document.createElement('div');
            newInfoBlocks.className = 'tabContent';
            infoBlock.appendChild(newInfoBlocks);

            var avatar = document.createElement('img');
            newInfoBlocks.appendChild(avatar);
            avatar.setAttribute('src', users[j].avatar);

            var innerBlock = document.createElement('div');
            innerBlock.className = 'inner__block';
            newInfoBlocks.appendChild(innerBlock);

            var firstName = document.createElement('p');
            innerBlock.appendChild(firstName);
            firstName.innerHTML = 'First Name: ' + users[j].first_name;

            var lastName = document.createElement('p');
            innerBlock.appendChild(lastName);
            lastName.innerHTML = 'Last Name: ' + users[j].last_name;
        }

        tabContent = document.getElementsByClassName('tabContent');
        tab = document.getElementsByClassName('tab');
        tab[0].className = 'tab whiteborder';
        hideTabsContent(1);
    };
}

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('main-block').onclick = function (event) {
    var target = event.target;
    if(target.className === 'tab'){
        for (var i = 0; i < tab.length; i++){
            if(target === tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
};

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}





