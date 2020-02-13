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

