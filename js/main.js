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

document.querySelectorAll(".reviews-scroll").forEach((target) => {
  target.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    menu.classList.remove("visible");
    home.classList.remove("home-shadow");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 250,
        behavior: "smooth",
      });
    }
  });
});
