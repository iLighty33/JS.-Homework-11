var myBoxElement = document.getElementById('myBox');
var myCounter = 0;

if (getCookie('count') == undefined) {
    myCounter = 3;
    for (let i = 0; i < myCounter; i++) {
        myBoxElement.innerHTML += (`<div class="myCircle id=${i}" ></div>`);
    }
}

if (+getCookie('count') > 0) {
    myCounter = +getCookie('count');
    for (let i = 0; i < getCookie('count'); i++) {
        myBoxElement.innerHTML += (
            `<div class="myCircle id=${i}" ></div>`
        );
    }
}

document.getElementById('addCircle').addEventListener('click', () => {
    myBoxElement.innerHTML += (`<div class="myCircle id=${myCounter + 1}" ></div>`);
    myCounter += 1;
    addCookie('count', myCounter, `max-age=${24 * 60 * 60}`);
})

document.getElementById('removeCircle').addEventListener('click', () => {
    if (myCounter != 0) {
        var el = myBoxElement.lastChild;
        console.log(el);
        el.remove();
        myCounter -= 1;
        deleteCookie('count');
        addCookie('count', myCounter, `max-age=${24 * 60 * 60}`);        
    }
    else
    {
        alert('Поле пустое, добавьте круги');
    }
})

function addCookie(key, value, parameters) {
    document.cookie = `${key} = ${value}; ${parameters}`;
}

function getCookie(key) {
    let cookies = {};
    let tempCookiesStrings = document.cookie.split('; ');
    for (let el of tempCookiesStrings) 
    {
        let pare = el.split('=');
        cookies[pare[0]] = pare[1];
    }
    return cookies[key];
}

function deleteCookie(key) {
    addCookie(key, '!', 'max-age = 0');
}