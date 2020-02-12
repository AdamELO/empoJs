// btn black or white
let body = document.querySelector("body");
let white = document.getElementsByTagName("button")[1];
let black = document.getElementsByTagName("button")[2];

white.addEventListener("click",()=>{
    body.style.backgroundColor="white";
    document.getElementsByTagName("h1")[0].style.color="black";
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
})
black.addEventListener("click",()=>{
    body.style.backgroundColor="black";
    document.getElementsByTagName("h1")[0].style.color="white";
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
})


