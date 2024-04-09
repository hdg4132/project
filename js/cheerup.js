const side_menu = document.querySelectorAll(".menu .under > li");
side_menu.forEach(function (item, index) {
  item.addEventListener("click", function () { //아이템을 클릭할때 이벤트
    /*
    if (this.classList.contains("on")) { //만약에 이미 온 클래스가 있다면
      this.classList.remove("on"); //this에서 온 클래스를 지워라
    } else { //온 클래스가 ㅇ없다면
      this.classList.add("on"); //this에 온 클래스를 추가해라
    }*/
    this.classList.toggle("on");
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
classList.toggle
*/
