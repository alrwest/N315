//importing functions
import { loadCart, loadProducts } from "./app.js";

//routing
export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "" && pageID != "home") {
    $.get(`pages/${pageID}.html`, function (data) {
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
