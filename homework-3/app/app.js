import { changePage } from "./model.js";


function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let path= pageID.split("/");
    
    console.log("hash", hashTag);
    console.log("page name: " + pageID);
    console.log("sub page name: " + path);
    
    changePage(path);
}



function initListeners(){
    console.log("hello");
}

function initSite() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
        initListeners();
        initSite();
});


//navbar toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle-button');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', () => {
        const currentLeft = parseInt(getComputedStyle(navbar).left, 10);
        if (currentLeft === -250) {
            navbar.style.left = '0';
        } else {
            navbar.style.left = '-250px';
        }
    });
});

  
