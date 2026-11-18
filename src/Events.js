export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', function () {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    for (const text of arr) {
        const li = document.createElement('li');
        li.textContent = text;

        function setTitle() {
            li.setAttribute('title', text);
        }

        li.addEventListener('mouseover', setTitle);
        li.addEventListener('mouseenter', setTitle);

        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    let firstClick = true;

    a.addEventListener('click', function (event) {
        if (firstClick) {
            event.preventDefault();
            a.textContent += ' ' + a.href;
            firstClick = false;
        }
    });

    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function addItem() {
        const li = document.createElement('li');
        li.textContent = 'Пункт';

        li.addEventListener('click', function () {
            li.textContent += '!';
        });

        ul.appendChild(li);
    }

    addItem();
    button.addEventListener('click', addItem);

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
