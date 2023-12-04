//importing functions
import { changeRoute } from "./model.js";

var cartCount = 0;
var productData = {};

//initial banner
function displayModal() {
  $("#Home").on("click", (e) => {
    $("#banner-modal").toggle();
  });

  $(".close").on("click", (e) => {
    $("#banner-modal").toggle();
  });
}

//loading cart functionality
export function loadCart() {
  console.log(productData.Cart);
  $(".cart").html(""); //cart starts empty
  $.each(productData.Cart, (idx, cartItem) => {
    let Products = productData.Products[cartItem.itemIdx];
    $(".cart").append(`
    <div class="product">
      <div class="productImage">
        <img src="./images/${Products.productImage}" alt="Keurig" />
      </div>
      <div class="productDetails">
        <div class="color-selection">
          <div class="circle" id="circle1"></div>
          <div class="circle" id="circle2"></div>
          <div class="circle" id="circle3"></div>
          <div class="circle" id="circle4"></div>
        </div>
        <h3>${Products.productName}</h3>
        <p class="price">SALE ${Products.salePrice}</p>
        <p class="price">$${Products.productPrice}</p>
        <div class="ratings">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <div class="ratings-line"></div>
          <div>(4095)</div>
        </div>
        <div class="shipping">
          <div><i class="fa-solid fa-truck-fast"></i></div>
          <p>Free Shipping</p>
        </div>
        <div id=${idx} class="buy-btn">Remove from Cart</div>
      </div>
    </div>`);
  });
}

//load products functionality
export function loadProducts() {
  console.log("loading..");
  $("home").html("");
  console.log("products:" + productData.Products);
  $.each(productData.Products, (idx, Products) => {
    $(".product-wrapper").append(`
      <div class="product">
      <div class="productImage">
        <img src="/images/${Products.productImage}" alt="Keurig" />
      </div>
      <div class="productDetails">
        <div class="color-selection">
          <div class="circle" id="circle1"></div>
          <div class="circle" id="circle2"></div>
          <div class="circle" id="circle3"></div>
          <div class="circle" id="circle4"></div>
        </div>
        <h3>${Products.productName}</h3>
        <p class="price">SALE ${Products.salePrice}</p>
        <p class="price">$${Products.productPrice}</p>
        <div class="ratings">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <div class="ratings-line"></div>
          <div>(4095)</div>
        </div>
        <div class="shipping">
          <div><i class="fa-solid fa-truck-fast"></i></div>
          <p>Free Shipping</p>
        </div>
        <div class="buy-btn">Buy Now</div>
      </div>
    </div> `);
  });
  $(".buy-btn").on("click", (e) => {
    console.log("click");
    let productIdx = e.currentTarget.id;
    console.log("product index:", productIdx);
    let newObj = {
      itemIdx: productIdx,
    };
    productData.Cart.push(newObj);
    console.log("cart info: " + productData.Cart);
    cartCount = productData.Cart.length;
    updateCartCount(); // updating our cart count
  });
}

function updateCartCount() {
  //if cart count is at 0,
  if (cartCount == 0) {
    $(".cartCounter").css("display", "block");
  } else if (cartCount >= 1) {
    $(".cartCounter").css("display", "block");
    $(".cartCounter").html(cartCount);
  } else {
    $(".cartCounter p").text("Error retrieving cart information");
  }
}

//data retrieval
export function getData() {
  return $.get(`data/data.json`)
    .done(function (data) {
      productData = data;
      console.log("Data retrieval success!");
    })
    .fail(function (data) {
      alert("error:", error);
    });
}

function initListeners() {
  $(window).on("hashchange", changeRoute);
  getData().then(function () {
    changeRoute();
    updateCartCount();
    displayModal();
  });
}

$(document).ready(function () {
  initListeners();
});
