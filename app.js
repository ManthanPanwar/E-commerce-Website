const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log("click");
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
