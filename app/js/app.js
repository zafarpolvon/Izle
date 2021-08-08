function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function closeMenu() {
  var close = document.getElementById("Menu");
  close.style.display = "none";
}
function openAuth() {
  var auth = document.getElementById("auth");
  var reg = document.getElementById("reg");
  auth.style.display = "flex";
  reg.style.display = "none";
}
function openMenu() {
  var close = document.getElementById("Menu");
  close.style.display = "block";
}
function dropdownFunction() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var images_modal = document.getElementById("dropdown");
// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", function (event) {
  if (event.target == images_modal) {
    images_modal.style.display = "none";
  }
});
$(document).ready(function () {
  // $('body').hide()
});
$(document).ready(function () {
  $(".next").click(function () {
    $(".pagination").find(".pageNumber.active").next().addClass("active");
    $(".pagination").find(".pageNumber.active").prev().removeClass("active");
  });
  $(".prev").click(function () {
    $(".pagination").find(".pageNumber.active").prev().addClass("active");
    $(".pagination").find(".pageNumber.active").next().removeClass("active");
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".radioContainer").on("click", function (e) {
  e.preventDefault();
  $(".radioContainer").removeClass("active");
  $(this).addClass("active");
});
new WOW().init();
