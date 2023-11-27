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

$(document).ready(function() {
    initListeners();
    changePage("Home"); //load default content
});
