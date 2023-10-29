export function createContent(pageName) {
    //creating dynamic title
    document.title = `${pageName} | JungleCook`
    //using ajax request to get pageName
    $.ajax({
        url: `${pageName}.html`,
        type: "GET",
        dataType: "html",
        success: function(data) {
            $("#app").html(data);
        }
    });
  }