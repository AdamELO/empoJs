// btn black or white
let nav
let body = document.querySelector("body");
let white = document.getElementsByTagName("button")[1];
let black = document.getElementsByTagName("button")[2];

white.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    document.getElementsByTagName("h1")[0].style.color = "black";
    document.getElementsByTagName("h1")[1].style.color = "black";
    for (let i = 0; i < 6; i++) {
        document.getElementsByTagName("a")[i].style.color = "grey";
    }
    for (let i = 0; i < 2; i++) {
        document.getElementsByTagName("h5")[i].style.color = "black";
    }
    for (let i = 0; i < 17; i++) {
        document.getElementsByTagName("h6")[i].style.color = "black";
    }
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("borderwhite")[i].style.border = "solid 10px white";
    }
    nav.classList.remove("bg-black");
    nav.classList.add("bg-white");
})
black.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("h1")[1].style.color = "white";
    for (let i = 0; i < 6; i++) {
        document.getElementsByTagName("a")[i].style.color = "white";
    }
    for (let i = 0; i < 2; i++) {
        document.getElementsByTagName("h5")[i].style.color = "white";
    }
    for (let i = 0; i < 17; i++) {
        document.getElementsByTagName("h6")[i].style.color = "white";
    }
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("borderwhite")[i].style.border = "solid 10px black";
    }
    nav.classList.remove("bg-white");
    nav.classList.add("bg-black");
})

// scroll fixed navabar
nav = document.getElementsByTagName("nav")[0];
let header = document.getElementsByTagName("header")[0];

function scrolled() {
    var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (currentScroll >= header.clientHeight) {
        nav.classList.add("fixed-top");
        header.classList.add("d-none");
        document.getElementById("emporium").classList.remove("d-none");
        document.getElementsByClassName("jumbotron")[0].style.marginTop = "104px";

    } else {
        nav.classList.remove("fixed-top");
        header.classList.remove("d-none");
        document.getElementById("emporium").classList.add("d-none");
        document.getElementsByClassName("jumbotron")[0].style.marginTop = "0";
    }
}
addEventListener("scroll", scrolled);

// carousel
let btn1 = document.getElementsByClassName("cursor")[0];
let btn2 = document.getElementsByClassName("cursor")[1];
let btn3 = document.getElementsByClassName("cursor")[2];
let btn4 = document.getElementsByClassName("cursor")[3];
let z = 0
btn1.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
        btn1.classList.add("bg-adam")
    }
    z++
    for (let i = 0; i < 8; i++) {
        document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-115%)";
    }
    if (z > 1 && z % 2 == 0) {
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = "translateX(0%)";
        }
    }
})
btn2.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
        btn2.classList.add("bg-adam")
    }
    z = 1
    for (let i = 0; i < 8; i++) {
        document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-230%)";
    }
})
btn3.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
        btn3.classList.add("bg-adam")
    }
    z = 1
    for (let i = 0; i < 8; i++) {
        document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-343%)";
    }
})
btn4.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
        btn4.classList.add("bg-adam")
    }
    z = 1
    for (let i = 0; i < 8; i++) {
        document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-462%)";
    }
})
setInterval(() => {
    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
            btn1.classList.add("bg-adam")
        }
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-115%)";
        }
    }, 10000);
    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
            btn2.classList.add("bg-adam")
        }
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-230%)";
        }
    }, 20000);
    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
            btn3.classList.add("bg-adam")
        }
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-343%)";
        }
    }, 30000);
    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
            btn4.classList.add("bg-adam")
        }
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-462%)";
        }
    }, 40000);
    setTimeout(() => {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
            btn1.classList.add("bg-adam")
        }
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = "translateX(0%)";
        }
    }, 50000);
}, 50000);

// modal

// modal click
var modal = document.getElementById("myModal");
var btn = document.getElementsByTagName("button")[3];
var close = document.getElementsByClassName("close")[0];
close.style.cursor = "pointer";

btn.onclick = function () {
    modal.classList.remove("d-none");
    modal.classList.add("d-flex");
    body.style.overflowY = "hidden";

}

close.onclick = function () {
    modal.classList.add("d-none");
    modal.classList.remove("d-flex");
    body.style.overflowY = "scroll";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add("d-none");
        modal.classList.remove("d-flex");
        body.style.overflowY = "scroll";
    }
}

// login signup
document.getElementsByClassName("nav")[0].addEventListener("click", () => {
    document.getElementsByClassName("exo")[1].classList.add('d-none');
    document.getElementsByClassName("exo")[0].classList.remove('d-none');
    document.getElementsByClassName("handmodal")[1].classList.add('d-none');
    document.getElementsByClassName("handmodal")[0].classList.remove('d-none');
    document.getElementsByClassName("heremodal")[1].classList.add('d-none');
    document.getElementsByClassName("heremodal")[0].classList.remove('d-none');
})
document.getElementsByClassName("nav")[1].addEventListener("click", () => {
    document.getElementsByClassName("exo")[0].classList.add('d-none');
    document.getElementsByClassName("exo")[1].classList.remove('d-none');
    document.getElementsByClassName("handmodal")[0].classList.add('d-none');
    document.getElementsByClassName("handmodal")[1].classList.remove('d-none');
    document.getElementsByClassName("heremodal")[0].classList.add('d-none');
    document.getElementsByClassName("heremodal")[1].classList.remove('d-none');
})

let genreh = document.getElementsByClassName("genre")[0];
let genref = document.getElementsByClassName("genre")[1];

genreh.addEventListener("click", () => {
    if (genreh.checked == true && genref.checked == true) {
        genref.checked = false
    }
})
genref.addEventListener("click", () => {
    if (genreh.checked == true && genref.checked == true) {
        genreh.checked = false
    }
})