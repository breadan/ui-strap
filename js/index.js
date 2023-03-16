//effects with scroll

// window.addEventListener('scroll',function() {
//     console.log('hello');
// })

//height of element
let heightOfNav = $("nav").height();
console.log(heightOfNav);

//height of element with padding
let heightOfNav2 = $("nav").innerHeight();
console.log(heightOfNav2);

//space between element & top & left
let x = $("#about").offset();
let spaceFromTop = $("#about").offset().top;
console.log(spaceFromTop);

// event in JQ
$(window).scroll(function () {
  // console.log('hello');
  // console.log($(window).scrollTop());

  if ($(window).scrollTop() > spaceFromTop - heightOfNav2 / 2) {
    $("nav").css("backgroundColor", "#b0bcf6");

    // effects button & css
    $(".myIcon").fadeIn(1000).css("display", "flex");
  } else {
    $("nav").css("backgroundColor", "transparent");
    $(".myIcon").fadeOut(1000);
  }

  // $('nav').css('backgroundColor', 'blue')
});

//************************************************************** */

//to go to top with click

// $('.myIcon').click(function() {
//     $(window).scrollTop(0);
// })

//to go to top with animate
$(".myIcon").click(function () {
  // $(window).animate( {scrollTop: 0}, 3000) //it is wrong
  $("html, body").animate({ scrollTop: 0 }, 3000);
});

//**************************************************************** */

//control nav
$("nav ul a").click(function () {
  let valueOfHref = $(this).attr("href");

  let sectionTopOffset = $("valueOfHref").offset().top;

  $("html, body").animate({ scrollTop: sectionTopOffset }, 2000);
});

console.log($("#services").offset().top);
//**************************************************************** */
//side Bar
let sideBarWidth = $(".sideBar-inner").innerWidth();

//to hide it
$("#sideBar").css("left", -sideBarWidth);

//but selector in variable
let colorBox = $(".color-box");
colorBox.eq(1).css("backgroundColor", "teal");
colorBox.eq(2).css("backgroundColor", "orange");
colorBox.eq(3).css("backgroundColor", "#888");
colorBox.eq(4).css("backgroundColor", "lightgreen");
colorBox.eq(0).css("backgroundColor", "#09c");

//to hide side Bar
$("#sideBar i ").click(function () {
  // $('.sideBar-inner').hide(1000);
  // $('.sideBar-inner').toggle(1000);

  //the true way
  if ($("#sideBar").css("left") == "0px") {
    $("#sideBar").animate({ left: -sideBarWidth }, 1000);
  } else {
    $("#sideBar").animate({ left: "0px" }, 1000);
  }
});
//****************************************************************

// Change the user interface
colorBox.click(function (e) {
  let bgColor = $(e.target).css("backgroundColor");
  console.log(bgColor);

  //select any element
  $("h1,h3").css("color", bgColor);
});

//**************************************************************** */

//loading screen
//  $(document).ready(function() {
//     // console.log('home ready');
//     $('#loading').slideUp(1000);
//  })

// another Way
$(document).ready(function () {
  $(".lds-facebook").fadeOut(50, function () {
    $("#loading").fadeOut(50, function () {
      //to display scroll
      $("body").css("overflow", "auto");

      //remove section
      $("#loading").remove();
    });
  });
});
//**************************************************************** */

//change background img             

$(".img-item").click(function (e) {
  let imgSrc = e.target.getAttribute("src");
  $(".pre-footer").css({"background": `url(../${imgSrc})`});
});

//**************************************************************** */
$(".p-third").slideUp(1000);
$(".p-second").slideUp(500);
$(".p-fourth").slideUp(1000);

$(".it-first").click(function () {
  $(".p-first").slideToggle(1000);
  $(".p-second").slideUp(1000);
  $(".p-third").slideUp(1000);
  $(".p-fourth").slideUp(1000);
});

$(".it-second").click(function () {
  $(".p-second").slideToggle(1000);
  $(".p-first").slideUp(1000);
  $(".p-third").slideUp(1000);
  $(".p-fourth").slideUp(1000);
});

$(".it-third").click(function () {
  $(".p-third").slideToggle(1000);
  $(".p-first").slideUp(1000);
  $(".p-second").slideUp(1000);
  $(".p-fourth").slideUp(1000);
});

$(".it-fourth").click(function () {
  $(".p-fourth").slideToggle(1000);
  $(".p-first").slideUp(1000);
  $(".p-second").slideUp(1000);
  $(".p-third").slideUp(1000);
});
//**************************************************************** */

//timer
let countDownDate = new Date("Dec 31, 2023, 23:59:59").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
  //get Date
  let dateNow = new Date().getTime();

  // the difference between now & count Date return milliSeconds
  let dateDiff = countDownDate - dateNow;

  //get time Units
  // let days = Math.floor( dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval();
  }
}, 1000);

// ***************************************************************
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
