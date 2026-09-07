document.addEventListener("DOMContentLoaded", function () {
  // 모바일 메뉴 토글
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
      });
    });
  }

  // 현재 페이지 메뉴 활성화 표시
  var current = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav-menu a").forEach(function (link) {
    if (link.getAttribute("data-page") === current) {
      link.classList.add("active");
    }
  });
});
