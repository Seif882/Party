"use strict";
// Opening and closing side bar

function openSideBar() {
  $("aside").css("left", "0");
  $("#aside-btn").css("left", "200px");
  $("#aside-btn").html(`<i class="fa-solid fa-bars"></i> CLOSE`);
}

function closeSideBar() {
  $("aside").css("left", "-200px");
  $("#aside-btn").css("left", "0px");
  $("#aside-btn").html(`<i class="fa-solid fa-bars"></i> OPEN`);
}

$("#aside-btn").click(function () {
  if ($("#aside-btn").html().includes("OPEN")) openSideBar();
  else closeSideBar();
});

$("aside i").click(closeSideBar);

// Handling singers

$(".bg-main").click(function () {
  let temp = $(this).attr("id").slice(-1);
  if ($(".active-singer").attr("id") !== `singer-${temp}`) {
    $(".active-singer").slideUp(500).removeClass("active-singer");
    $(`#singer-${temp}`).slideDown(500).addClass("active-singer");
  }
});

// Handling timer

const countDownDate = new Date("Aug 8, 2024 10:00:00").getTime();

setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);
}, 1000);

// Handling Footer

$(".social-container i").hover(
  function () {
    $(this)
      .css("color", "white")
      .css("background-color", "var(--contact-red-color)");
  },
  function () {
    $(this)
      .css("color", "var(--contact-color)")
      .css("background-color", "transparent");
  }
);

// Handling form

function validInput() {
  let flag = false;

  if (
    $("textarea").val().length > 0 &&
    $("input").eq(0).val().length > 0 &&
    $("input").eq(1).val().length > 0
  )
    flag = true;
  else flag = false;

  if (flag === true) $("#form-btn").removeClass("disabled");
  else $("#form-btn").addClass("disabled");
}

document.querySelector("textarea").addEventListener("input", function () {
  if (100 - $("textarea").val().length >= 0) {
    $("textarea").removeClass("is-invalid");
    $("#char-num-p").html(`<span id="char-num"></span> Characters Remaining`);

    $("#char-num").html(100 - $("textarea").val().length);
  }

  if (100 - $("textarea").val().length < 0) {
    $("textarea").addClass("is-invalid");
    $("#char-num-p").html(
      `<span id="char-num">You have passed the limit for available  characters</span>`
    );
  }

  validInput();
});

document.querySelectorAll("input").forEach(function (ele) {
  ele.addEventListener("input", validInput);
});
