
import { createContent } from "../model/model";

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
    createContent("Home"); //default page
});
