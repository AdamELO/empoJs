// btn black or white
let nav
let body = document.querySelector("body");
let white = document.getElementsByTagName("button")[1];
let black = document.getElementsByTagName("button")[2];

white.addEventListener("click",()=>{
    body.style.backgroundColor="white";
    document.getElementsByTagName("h1")[0].style.color="black";
    document.getElementsByTagName("h1")[1].style.color="black";
    for (let i = 0; i < 6; i++) {
        document.getElementsByTagName("a")[i].style.color="grey";
    }
    for (let i = 0; i < 2; i++) {
        document.getElementsByTagName("h5")[i].style.color="black"; 
    }
    for (let i = 0; i < 13; i++) {
        document.getElementsByTagName("h6")[i].style.color="black";
    }
    for (let i = 2; i < 6; i++) {
        document.getElementsByTagName("span")[i].style.color="white";
    }
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("borderwhite")[i].style.border="solid 10px white";
    }
    nav.classList.remove("bg-black");
    nav.classList.add("bg-white");
})
black.addEventListener("click",()=>{
    body.style.backgroundColor="black";
    document.getElementsByTagName("h1")[0].style.color="white";
    document.getElementsByTagName("h1")[1].style.color="white";
    for (let i = 0; i < 6; i++) {
        document.getElementsByTagName("a")[i].style.color="white";
    }
    for (let i = 0; i < 2; i++) {
        document.getElementsByTagName("h5")[i].style.color="white"; 
    }
    for (let i = 0; i < 13; i++) {
        document.getElementsByTagName("h6")[i].style.color="white";
    }
    for (let i = 2; i < 6; i++) {
        document.getElementsByTagName("span")[i].style.color="white";
    }
    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("borderwhite")[i].style.border="solid 10px black";
    }
    nav.classList.remove("bg-white");
    nav.classList.add("bg-black");
})

// scroll fixed navabar
nav = document.getElementsByTagName("nav")[0];
let header = document.getElementsByTagName("header")[0];

function scrolled(){
    var currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(currentScroll >= header.clientHeight){
    nav.classList.add("fixed-top");        
    header.classList.add("d-none");      
    document.getElementById("emporium").classList.remove("d-none");
    document.getElementsByClassName("jumbotron")[0].style.marginTop = "5%";

    }else{
        nav.classList.remove("fixed-top");        
        header.classList.remove("d-none");      
        document.getElementById("emporium").classList.add("d-none");
        document.getElementsByClassName("jumbotron")[0].style.marginTop = "0";
    }
  }
  
addEventListener("scroll", scrolled);

// carousel
// let span = document.getElementsByTagName("span")[2];
// let span1 = document.getElementsByTagName("span")[3];
// let span2 = document.getElementsByTagName("span")[4];
// let span3= document.getElementsByTagName("span")[5];
// span1.style.cursor="pointer";
// span2.style.cursor="pointer";
// span3.style.cursor="pointer";
// span.style.cursor="pointer";


// var carousel = document.getElementById("carrousel");

// span1.addEventListener("click",()=>{
//     span1.style.color="rgb(196,45,64)";
//     carousel.style.transition="all 4s";
//     carousel.style.transform="translateX(-25%)";
//     document.getElementsByClassName("col-lg-3")[0].style.transition="all 1.5s";
//     document.getElementsByClassName("col-lg-3")[0].style.opacity ="0";
//     document.getElementsByClassName("col-lg-3")[4].style.opacity="0";
//     setTimeout(() => {
//         document.getElementsByClassName("col-lg-3")[0].style.display ="none";
//         document.getElementsByClassName("col-lg-3")[4].style.display="block";
//     }, 1500);
//     setTimeout(() => {
//         document.getElementsByClassName("col-lg-3")[4].style.transition="all 1.5s";
//         document.getElementsByClassName("col-lg-3")[4].style.transform="translateX(-3%)";
//     }, 2000);
//     setTimeout(() => {
//         carousel.style.transition="all 0s";
//         carousel.style.transform="translateX(0%)";
//         document.getElementsByClassName("col-lg-3")[4].style.transition="all 1.5s";
//         document.getElementsByClassName("col-lg-3")[4].style.opacity="1";
//     }, 2000);
//     setTimeout(() => {
//         document.getElementsByClassName("col-lg-3")[4].style.transform="translateX(0%)";
//     }, 2000);
// })


// modal
// modal click
var modal = document.getElementById("myModal");
var btn = document.getElementsByTagName("button")[3];
var close = document.getElementsByClassName("close")[0];
close.style.cursor="pointer";

btn.onclick = function() {
    modal.classList.remove("d-none");
    modal.classList.add("d-flex");
    body.style.overflowY="hidden";
 
}

close.onclick = function() {
  modal.classList.add("d-none");
  modal.classList.remove("d-flex");
  body.style.overflowY="scroll";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.add("d-none"); 
    modal.classList.remove("d-flex");
    body.style.overflowY="scroll";
  }
}

// login signup
document.getElementsByClassName("nav")[0].style.cursor="pointer";
document.getElementsByClassName("nav")[1].style.cursor="pointer";

document.getElementsByClassName("nav")[0].addEventListener("click",()=>{
    document.getElementsByClassName("exo")[1].classList.add('d-none');
    document.getElementsByClassName("exo")[0].classList.remove('d-none');
    document.getElementsByClassName("handmodal")[1].classList.add('d-none');
    document.getElementsByClassName("handmodal")[0].classList.remove('d-none');
    document.getElementsByClassName("heremodal")[1].classList.add('d-none');
    document.getElementsByClassName("heremodal")[0].classList.remove('d-none');
})
document.getElementsByClassName("nav")[1].addEventListener("click",()=>{
    document.getElementsByClassName("exo")[0].classList.add('d-none');
    document.getElementsByClassName("exo")[1].classList.remove('d-none');
    document.getElementsByClassName("handmodal")[0].classList.add('d-none');
    document.getElementsByClassName("handmodal")[1].classList.remove('d-none');
    document.getElementsByClassName("heremodal")[0].classList.add('d-none');
    document.getElementsByClassName("heremodal")[1].classList.remove('d-none');
})

let genreh = document.getElementsByClassName("genre")[0];
let genref = document.getElementsByClassName("genre")[1];

genreh.addEventListener("click",()=>{
    if (genreh.checked==true &&genref.checked==true) {
        genref.checked=false
    }
})
genref.addEventListener("click",()=>{
    if (genreh.checked==true &&genref.checked==true) {
        genreh.checked=false
    }
})