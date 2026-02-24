

let btn = document.querySelector("button");
let header = document.querySelector(".header");
let links = document.querySelector(".style-header");
let txtArea = document.querySelector("textarea");
let span = document.querySelector(".count-text");
let inside_area = document.querySelector(".inside-area");
let send_message = document.querySelector(".sending-message");

window.onscroll = function () {
    if (window.scrollY >= 640) {
        btn.style.display = "block";
    } else {
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
    span.textContent = `${txtArea.value.length}`;
    inside_area.style.width = `${txtArea.value.length}%`;


    if (inside_area.style.width === "100%") {
        inside_area.style.backgroundColor = `teal`;
        setTimeout(() => {
            inside_area.style.opacity = `0`;
        }, 2000);
    }
}

send_message.addEventListener("click", function () {
    let blob = new Blob([txtArea.value], {
        type: "text/plain",
    })

    let link_a = document.createElement("a");
    link_a.download = "message.txt";
    link_a.href = URL.createObjectURL(blob);
    link_a.click();
})
