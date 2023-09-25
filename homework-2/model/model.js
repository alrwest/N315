 export function addPageContent(pageName) {
    //adding the dynamic header, set depending on pageName
    $("#header").html(`<h1> Welcome to the ${pageName} Page! </h1>`);
    //using an ajax request to update content sections based on pageName
    $.ajax({
        url: `${pageName}.html`,
        type: "GET",
        dataType: "html",
        success: function(data) {
            $("#app").html(data);
        }
    });
}