/*--===========================================================
             SIDE BAR SECTION
================================================================*/

function showSidebar() {
  document.querySelector(".sidebar-main").style.display = "flex";
}
function closeSidebar() {
  document.querySelector(".sidebar-main").style.display = "none";
}
/*--===========================================================
             SIDE BAR SECTION END
================================================================*/

/*--===========================================================
                 FAQ'S SECTION 
================================================================*/
function showFaqs() {
  ((document.querySelector(".faq-main").style.display = "flex"),
    (document.querySelector(".faq-popup2").style.display = "flex"),
    (document.querySelector(".faq-popup").style.display = "none"));
}
function closeFaqs() {
  ((document.querySelector(".faq-main").style.display = "none"),
    (document.querySelector(".faq-popup2").style.display = "none"),
    (document.querySelector(".faq-popup").style.display = "flex"));
}

/*--===========================================================
                 FAQ'S SECTION END
================================================================*/

/*--===========================================================
                 NOTIFY SECTION START
================================================================*/
function notify() {
  document.querySelector("#notify-dot").style.display = "flex";
}

/*--===========================================================
                 NOTIFY SECTION END
================================================================*/

/*--===========================================================
                 CART SECTION START
================================================================*/
function showCart() {
  document.querySelector(".side-cart").style.display = "block";
  document.querySelector(".sidebar-main").style.display = "none";
}

function closeCart() {
  document.querySelector(".side-cart").style.display = "none";
}

function addProduct() {
  document.querySelector(".cart-box").style.display = "flex";
  document.querySelector("#notify-dot").style.display = "flex";
  document.querySelector(".empty-text").style.display = "none";
  document.querySelector(".btn-goCart").style.display = "none";
}
function removeProduct() {
  document.querySelector(".cart-box").style.display = "none";
  document.querySelector("#notify-dot").style.display = "none";
  document.querySelector(".empty-text").style.display = "flex";
  document.querySelector(".btn-goCart").style.display = "flex";
}

function addProductt() {
  document.querySelector(".cart-boxx").style.display = "flex";
  document.querySelector("#notify-dot").style.display = "flex";
  document.querySelector(".empty-text").style.display = "none";
  document.querySelector(".btn-goCart").style.display = "none";
}
function removeProductt() {
  document.querySelector(".cart-boxx").style.display = "none";
  document.querySelector("#notify-dot").style.display = "none";
  document.querySelector(".empty-text").style.display = "flex";
  document.querySelector(".btn-goCart").style.display = "flex";
}

function addProducts() {
  document.querySelector(".cart-box3").style.display = "flex";
  document.querySelector("#notify-dot").style.display = "flex";
  document.querySelector(".empty-text").style.display = "none";
  document.querySelector(".btn-goCart").style.display = "none";
}
function removeProducts() {
  document.querySelector(".cart-box3").style.display = "none";
  document.querySelector("#notify-dot").style.display = "none";
  document.querySelector(".empty-text").style.display = "flex";
  document.querySelector(".btn-goCart").style.display = "flex";
}

function addProductts() {
  document.querySelector(".cart-box2").style.display = "flex";
  document.querySelector("#notify-dot").style.display = "flex";
  document.querySelector(".empty-text").style.display = "none";
  document.querySelector(".btn-goCart").style.display = "none";
}
function removeProductts() {
  document.querySelector(".cart-box2").style.display = "none";
  document.querySelector("#notify-dot").style.display = "none";
  document.querySelector(".empty-text").style.display = "flex";
  document.querySelector(".btn-goCart").style.display = "flex";
}

function buyPopup() {
  document.querySelector(".buy-popup").style.display = "flex";
  document.querySelector(".cart-box2").style.display = "none";
  document.querySelector(".cart-box3").style.display = "none";
  document.querySelector(".cart-boxx").style.display = "none";
  document.querySelector(".cart-box").style.display = "none";
  document.querySelector("#notify-dot").style.display = "none";
  document.querySelector(".empty-text").style.display = "flex";
  document.querySelector(".btn-goCart").style.display = "flex";
}

function removePopup() {
  document.querySelector(".buy-popup").style.display = "none";
}

/*--===========================================================
                 CART SECTION END
================================================================*/
