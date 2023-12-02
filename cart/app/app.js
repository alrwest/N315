var cartCount = 0;
var productInfo = {};

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
    //loading our Home page
    $.get(`pages/home.html`, function (data) {
      console.log("home " + data);
      $("#app").html(data);
      loadProducts();
    });
  }
}

//loading the cart
function loadCart() {
  $(".cart").html(""); //cart starts empty
  $.each(productInfo.Cart, (idx, cartItem) => {
    let Products = productInfo.Products[cartItem.itemIdx];
    $(".cart").append(`
        <div class="product">
            <div class="productImage">
            <img src="/images/${Products.productImage}" alt="bike" />
            </div>
            <div class="productDetails">
            <h3>${Products.productName}</h3>
            <p>${Products.productDescShort}</p>
            <p class="price">$${Products.productPrice}</p>
            <div id =${idx} class="buyNow">Remove From Cart</div>
            </div>
     </div> `);
  });
}

//cart functionality
function loadProducts() {
  console.log("load");
  $(".home").html("");
  console.log(productInfo.Products);
  $.each(productInfo.Products, (idx, Products) => {
    $(".home").append(`
        <div class="product">
            <div class="productImage">
            <img src="/images/${Products.productImage}" alt="bike" />
            </div>
            <div class="productDetails">
            <h3>${Products.productName}</h3>
            <p>${Products.productDescShort}</p>
            <p class="price">$${Products.productPrice}</p>
            <div id =${idx} class="buyNow">Buy Now!</div>
            </div>
     </div> `);
  });
  $(".buyNow").on("click", (e) => {
    console.log("click");
    let productIdx = e.currentTarget.id;
    console.log("product index:", productIdx);
    let newObj = {
      itemIdx: productIdx,
    };
    productInfo.Cart.push(newObj);
    console.log(productInfo.Cart);
    cartCount = productInfo.Cart.length;
    updateCartCount(); // updating our cart count
  });
}

function updateCartCount() {
  //if cart count is at 0,
  if (cartCount == 0) {
    $(".cartCounter").css("display", "none");
  } else if (cartCount >= 1) {
    $(".cartCounter").css("display", "block");
    $(".cartCounter").html(cartCount);
  } else {
    $(".cartCounter p").text("Error retrieving cart information");
  }
}

function getData() {
  $.get(`data/data.json`, (data) => {
    productInfo = data;
  }).fail(function (data) {
    alert("error:", error);
  });
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  updateCartCount();
  getData();
}

$(document).ready(function () {
  initURLListener();
});
