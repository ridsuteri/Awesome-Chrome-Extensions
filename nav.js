$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  $(".scrollToTop").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

function toggleDarkLight() {
  var body = document.getElementById("body");
  var button = document.getElementById("toggle");
  if (button.innerHTML == "☀️") {
    button.innerHTML = "🌙";
  } else {
    button.innerHTML = "☀️";
  }

  var trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 500);
  };

  var currentClass = body.className;
  // body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  if (currentClass == "light-mode") {
    trans();
    body.className = "dark-mode";
  } else {
    trans();
    body.className = "light-mode";
  }
}