import { createContent } from '../app/model.js';

//dynamically update background/body for each page

function updateBody(page) {
    $('body').removeClass() //if a class exists, reset
    $('body').addClass(page); //add correct body styles for page
}


function initListeners() {
    $("nav a").on("click", (e) => {
        e.preventDefault();
        let route = e.currentTarget.id;
        createContent(route);
        updateBody(route);
    });
}

$(document).ready(function () 
{
    initListeners();
    createContent("login"); //default page
    updateBody("login"); //default body
});

