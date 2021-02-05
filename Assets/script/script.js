$(function () {
  $(".hamburger").on("click", function () {
    $(".toggle").toggleClass("open");
    $(".nav-list").toggleClass("open");
  });
  AOS.init({
    easing: "ease",
    duration: 1000,
  });
});
