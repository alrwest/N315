//importing functions
import { loadCart, loadProducts, getData } from "./app.js";

//routing
export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "" && pageID != "home") {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("not home " + data);
      $("#app").html(data);
      loadCart();
    });
  } else {
    //loading home
    $.get(`pages/Home.html`, function (data) {
      console.log("Home " + data);
      $("#app").html(data);
      loadProducts();
    });
  }
}
