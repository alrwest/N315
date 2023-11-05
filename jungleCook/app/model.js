//routing pages
export function updateContent(pageName) {
    $.ajax({
        url: `./pages/${pageName}.html`,
        type: "GET",
        dataType: "html",
        success: function(data) {
            $("#app").html(data);
        }
    });
}
