const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  navLink.classList.toggle("open");

  const isOpen = navLink.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fa fa-times" : "fa fa-bars");
});

navLink.addEventListener("click", () => {
  navLink.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa fa-bars");
});

scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".banner .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".banner h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".banner .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});
