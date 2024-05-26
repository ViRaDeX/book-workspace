$(document).ready(function () {
  //Show Log In page when clicked on Log In | Sign Up button

  $("#buttonLS").click(function () {
    $("#splash").hide();
    $("#logIn").show();
  });

  //   Show Home page when clicked on Skip and explore button

  $(".splash-btn2").click(function () {
    $("#splash").hide();
    $("#home").show();
    $("#header").show();
    $("#navigation").show();
  });

  //   Navigate back to the previus page

  $(".backBtn").click(function () {
    window.history.back();
  });

  //   Show Home page when clicked on Home button inside navigation

  $("#homeBtn").click(function () {
    $("#header").show();
    $("#navigation").show();
    $("section").not("#home").hide();
    $("#home").show();
  });

  //   Show Log In page when clicked on Profile button inside navigation

  $("#profileBtn").click(function () {
    $("#header").hide();
    $("#navigation").hide();
    $("section").not("#logIn").hide();
    $("#logIn").show();
  });

  //   Show Splash page when clicked on logo from any page

  $(".headerlogo").click(function () {
    $("#header").hide();
    $("#navigation").hide();
    $("section").not("#splash").hide();
    $("#splash").show();
  });
});
