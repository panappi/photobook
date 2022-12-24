// const buttonMenuImage = document.getElementById("menu_image");
// const menu_imageOPEN = document.getElementById("menu_image-open");
// const menu_imageCLOSE = document.getElementById("menu_image-close");
const menu_text = document.getElementById("menu_text");
const hamburger = document.getElementById("hamburger");
const hamburgerBar = hamburger.children;
console.log(hamburgerBar);

const menuImageChange = (el) => {
  if (el.style.display == "") {
    el.style.display = "none";
  } else {
    el.style.display = "";
  }
};

const menuTextIn = (el) => {
  if (el.classList.contains("is_active")) {
    el.classList.remove("is_active");
    // el.classList.remove("is_active", "fadeIn");
    // el.style.display = "none";
    for (var i = 0, len = hamburgerBar.length; i < len; i++) {
      hamburgerBar[i].classList.remove("is_active");
    }
  } else {
    el.classList.add("is_active");
    // el.classList.add("is_active", "fadeIn");
    // el.style.display = "";
    for (var i = 0, len = hamburgerBar.length; i < len; i++) {
      hamburgerBar[i].classList.add("is_active");
    }
  }
};

// buttonMenuImage.addEventListener(
//   "click",
//   () => {
//     menuTextIn(menu_text);
//     menuImageChange(menu_imageOPEN);
//     menuImageChange(menu_imageCLOSE);
//   },
//   false
// );

hamburger.addEventListener(
  "click",
  () => {
    menuTextIn(menu_text);
  },
  false
);
