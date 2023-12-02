
//empty array for recipes
var recipes = [];



export function changePage(pagePathArray) {
    if (pagePathArray === "") {
        updateContent("Home");
    } else {
        if (pagePathArray.length === 1) {
            updateContent(pagePathArray[0]);
        } else {
            updateContent([pagePathArray[1]]); //subpage
        }
    } 
}



//routing pages
export function updateContent(pageName) {
    $.ajax({
        url: `../pages/${pageName}.html`,
        type: "GET",
        dataType: "html",
        success: function(data) {
            $("#app").html(data);
        } 
    });
}


