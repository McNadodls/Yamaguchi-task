const body = document.querySelector(".body");
const btnReplacemen = document.querySelector(".screan__btn");

const womanScrean = document.querySelector(".woman");
const imgWoman = document.querySelector(".woman__image");


//код отвечающий за стол 
const tableScrean = document.querySelector(".table");

const btnDown = document.querySelector("#table-btn-down");
const btnUp = document.querySelector("#table-btn-up");
const tableImgUp = document.querySelector("#table-img-up");

function MoveTable (direction) {
    if (direction === "up" && tableImgUp.classList.value.includes("go-down")) { 
        tableImgUp.classList.remove("go-down");
        tableImgUp.classList.add("go-up");
    } 
    if (direction === "down") { 
        tableImgUp.classList.remove("go-up");
        tableImgUp.classList.add("go-down");
    }
}

btnDown.addEventListener("click", () => {
    MoveTable("down");
});

btnUp.addEventListener("click", () => {
    MoveTable("up");
});

//перключение экранов по кнопке 
//тут происходит отмена всех анимаций смена и смена фона
btnReplacemen.addEventListener("click", () => {    
    if (tableScrean.classList.value.includes("screan_hide") ) {
        body.classList.remove("body_theme_dark");
        body.classList.add("body_theme_white");
        tableScrean.classList.remove("screan_hide");
        womanScrean.classList.add("screan_hide");
        tableImgUp.classList.remove("go-down");
        tableImgUp.classList.remove("go-up");
        imgWoman.classList.remove("woman-fly");
    } else {
        body.classList.add("body_theme_dark");
        body.classList.remove("body_theme_white");
        womanScrean.classList.remove("screan_hide");
        tableScrean.classList.add("screan_hide");
        imgWoman.classList.add("woman-fly");
    }
})
