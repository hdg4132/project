const side_menu = document.querySelectorAll(".menu .under > li");
side_menu.forEach(function (item, index) {
  item.addEventListener("click", function () {
    if (this.classList.contains("on")) {
      this.classList.remove("on");
    } else {
      this.classList.add("on");
    }
  });
});

const go_top = document.querySelector(".go-top");
window.addEventListener("scroll", function () {
  //console.log(window.scrollY);
  if (this.scrollY > 200) {
    go_top.classList.add("show");
  } else {
    go_top.classList.remove("show");
  }
});

go_top.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/*
:hover 
classList.add
classList.remove
classList.contains
*/
