//empty array for recipes
var recipes = [];

/*export function changePage(pagePathArray) {
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
*/

//routing pages
/*export function updateContent(pageName) {
    $.ajax({
        url: `../pages/${pageName}.html`,
        type: "GET",
        dataType: "html",
        success: function(data) {
            $("#app").html(data);
        } 
    });
}
*/

//routing
export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "" && pageID != "Home") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    //loading home
    $.get(`pages/Home.html`, function (data) {
      console.log("Home " + data);
      $("#app").html(data);
    });
  }
}
