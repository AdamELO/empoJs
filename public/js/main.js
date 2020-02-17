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
    document.getElementById("scrollgsm").style.color = "black";
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
    document.getElementById("scrollgsm").style.color = "white";
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
let z = 0

let carousel = function (btn, translate) {
    document.getElementsByClassName("cursor")[btn];
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("cursor")[i].classList.remove("bg-adam");
        document.getElementsByClassName("cursor")[btn].classList.add("bg-adam")
    }
    if (btn == 0) {
        z++
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = `translateX(${translate}%)`;
        }
        if (z > 1 && z % 2 == 0) {
            for (let i = 0; i < 8; i++) {
                document.querySelectorAll("#slides > div")[i].style.transform = "translateX(0%)";
            }
        }
    } else {
        z = 1
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = `translateX(${translate}%)`;
        }
    }
}

// bonus carousel auto
setInterval(() => {
    setTimeout(() => {
        document.getElementsByClassName("cursor")[0].classList.add("bg-adam")
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("#slides > div")[i].style.transform = "translateX(-115%)";
        }
    }, 10000);
    setTimeout(() => {
        setTimeout(() => {
            carousel(1, -230)
        }, 5000);
    }, 20000);
    setTimeout(() => {
        carousel(2, -343)
    }, 30000);
    setTimeout(() => {
        carousel(3, -462)
    }, 40000);
    setTimeout(() => {
        carousel(0, -115)
    }, 50000);
}, 40000);

// modal//

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
let loginsignup = function (num, index) {
    document.getElementsByClassName("exo")[index].classList.add('d-none');
    document.getElementsByClassName("exo")[num].classList.remove('d-none');
    document.getElementsByClassName("handmodal")[index].classList.add('d-none');
    document.getElementsByClassName("handmodal")[num].classList.remove('d-none');
    document.getElementsByClassName("heremodal")[index].classList.add('d-none');
    document.getElementsByClassName("heremodal")[num].classList.remove('d-none');
}

// bonus modal genre
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

// bonus hover recent products
let bonushover = function (number) {
    document.getElementsByClassName("bonusrecentproducts")[number].style.opacity = "1";
    document.getElementsByClassName("bonusrightrecentproducts")[number].style.opacity = "1";
}
let bonushoverout = function (number) {
    document.getElementsByClassName("bonusrecentproducts")[number].style.opacity = "0";
    document.getElementsByClassName("bonusrightrecentproducts")[number].style.opacity = "0";
}

// bonus speechsynthesisuterrence
var synth = window.speechSynthesis;
document.getElementsByTagName("h1")[0].addEventListener("mouseover", () => {
    var toSpeak = new SpeechSynthesisUtterance("Emporium");
    toSpeak.lang = "en-GB";
    synth.speak(toSpeak);
})

document.getElementsByTagName("h1")[1].addEventListener("mouseover", () => {
    var toSpeak = new SpeechSynthesisUtterance("Emporium");
    toSpeak.lang = "en-GB";
    synth.speak(toSpeak);
})