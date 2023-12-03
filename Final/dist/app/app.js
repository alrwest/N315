//routing
function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    //   console.log(hashTag + ' ' + pageID);
  
    if (pageID != "" && pageID != "home") {
      $.get(`pages/${pageID}.html`, function (data) {
        console.log("not home " + data);
        $("#app").html(data);
        loadCart();
      });
    } else {

      //loading home
      $.get(`pages/home.html`, function (data) {
        console.log("home " + data);
        $("#app").html(data);
        loadProducts();
      });
    }
  }