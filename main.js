const button = document.getElementById("menu_image");
const menu_imageOPEN = document.getElementById("menu_image-open");
const menu_imageCLOSE = document.getElementById("menu_image-close");
const menu = document.getElementById("menu");

const menu_image_change = (el) => {
  if (el.style.display == "") {
    el.style.display = "none";
  } else {
    el.style.display = "";
  }
};

const menu_text_in = (el) => {
  if (el.classList.contains("menu_text")) {
    el.classList.remove("menu_text", "fadeIn");
    el.style.display = "none";
  } else {
    el.classList.add("menu_text", "fadeIn");
    el.style.display = "";
  }
};

const menu_text_out = (el) => {
  if (el.style.display("")) {
    el.classList.add("fadeOut");
  } else {
    el.classList.remove("fadeOut");
  }
};

button.addEventListener(
  "click",
  () => {
    menu_text_in(menu);
    menu_image_change(menu_imageOPEN);
    menu_image_change(menu_imageCLOSE);
  },
  false
);
