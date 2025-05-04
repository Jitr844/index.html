const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //toggle mobile menu visiblity
    document.body.classList.toggle("show-mobile-menu");
});
//close button when the close button will clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
