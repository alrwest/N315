//import routing
import { updateContent, changePage } from "./model.js";

//display mobile nav
var mobileNav = document.getElementById("mobile-icon");
mobileNav.addEventListener("click", () => {
    mobileNav.classList.toggle("mobileDisplay");
});



function initListeners() {
    $(".nav-links a").on("click", (e) => {
        e.preventDefault();
        //get nav id of each link, push into update content for navigation
        let navigation = e.currentTarget.id;
        updateContent(navigation);
    });
}


/**
 * Implementing "create" feature
 */

var initialIngredCount = 3;
var initialInstrCount = 3;

export function addListener() {
    //add another line for ingredients
    $(".second-sect-add-btn").on("click", (e) => {
        initialIngredCount++;
    })
}



$(document).ready(function() {
    initListeners();
    changePage("Home"); //load default content
});
