

let btn = document.querySelector("button");
let header = document.querySelector(".header");
let links = document.querySelector(".style-header");
let txtArea = document.querySelector("textarea");
let span = document.querySelector(".count-text");

window.onscroll = function () {
    if(window.scrollY >= 640){
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

txtArea.oninput = function () {
    span.textContent = `${txtArea.value.length}/100`;
}