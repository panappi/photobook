const button = document.getElementById("menu_image");
const menu_imageOPEN = document.getElementById("menu_image-open");
const menu_imageCLOSE = document.getElementById("menu_image-close");
const menu_text = document.getElementById("menu");

const menu_image_change = (el) => {
  if (el.style.display == "") {
    el.style.display = "none";
  } else {
    el.style.display = "";
  }
};

const menu_text_change = (el) => {
  if (el.classList.contains("menu_text")) {
    el.classList.remove("menu_text", "fadeIn");
  } else {
    el.style.right = "-100%";
    el.classList.add("menu_text", "fadeIn");
  }
};

button.addEventListener(
  "click",
  () => {
    menu_image_change(menu_imageOPEN);
    menu_image_change(menu_imageCLOSE);
    menu_text_change(menu_text);
  },
  false
);
