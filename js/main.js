const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const home = document.querySelector(".home");

burger.addEventListener("click", () => {
  menu.classList.toggle("visible");
  home.classList.toggle("home-shadow");
});

document.querySelectorAll(".question").forEach((el) => {
  el.addEventListener("click", function (e) {
    this.classList.toggle("collapsed");
    const angleId = this.querySelector("img").id;
    const angle = document.getElementById(angleId);
    if (this.classList.contains("collapsed")) {
      angle.classList.remove("angle-up");
    } else {
      angle.classList.add("angle-up");
    }
  });
});
