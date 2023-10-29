import { createContent } from '../app/model.js';

function initListeners() {
    $("nav a").on("click", (e) => {
        e.preventDefault();
        let route = e.currentTarget.id;
        createContent(route);

    });
}

$(document).ready(function () 
{
    initListeners();
    createContent("home"); //default page
});

