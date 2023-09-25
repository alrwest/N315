import { addPageContent } from "../model/model.js";

function initListeners() {
    $("nav a").on("click", (e) => {
        e.preventDefault();
        let buttonID = e.currentTarget.id;
        //console.log(buttonID);
        addPageContent(buttonID);

    });
}


$(document).ready(function () 
{
    initListeners();
    addPageContent("Home"); //default page
});
