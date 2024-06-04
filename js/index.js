// весь шпион целиком
let spy = document.getElementById(`spy`);
// сюда выводи координаты мышки
let resultClick = document.getElementById(`result-click`);
let resultType = document.getElementById(`result-type`);

let x = 0;
let y = 0;

document.addEventListener(`mousemove`, function (evt) {
    resultClick.innerHTML = evt.clientX + `x, ` + evt.clientY + `y`;
});

document.addEventListener(`click`, function (evt) {
    x = evt.clientX;
    y = evt.clientY;

    spy.style.left = `${evt.clientX - 50}px`;
    spy.style.top = `${evt.clientY - 50}px`;
});

document.addEventListener(`keydown`, function (evt) {
    resultType.innerHTML = evt.key;

    if (evt.key == "ArrowDown") {
        y += 100;
        resultClick.innerHTML = x + `x, ` + y + `y`;
    } else if (evt.key == `ArrowUp`) {
        y -= 100;
        resultClick.innerHTML = x + `x, ` + y + `y`;
    } else if (evt.key == "ArrowLeft") {
        x -= 100;
        resultClick.innerHTML = x + `x, ` + y + `y`;
    } else if (evt.key == "ArrowRight") {
        x += 100;
        resultClick.innerHTML = x + `x, ` + y + `y`;
    }

    spy.style.left = `${x - 50}px`;
    spy.style.top = `${y - 50}px`;
});

let nameInputNode = document.querySelector(`#name-input`);
let nameNode = document.querySelector(`#result-name`);

nameInputNode.addEventListener(`input`, function () {
    nameNode.innerHTML = nameInputNode.value;
});

let skinNode = document.querySelector(`#skin`);
let skinContainerNode = document.querySelector(`#skin-container`);

skinNode.addEventListener(`input`, function () {
    if (skinNode.value == `1`) {
        skinContainerNode.innerHTML = `<img src="assets/spy.png" alt="" />`;
    } else if (skinNode.value == `2`) {
        skinContainerNode.innerHTML = `<img src="assets/dino.png" alt="" />`;
    } else if (skinNode.value == `3`) {
        skinContainerNode.innerHTML = `<img src="assets/ghost.png" alt="" />`;
    }

});


