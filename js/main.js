const slider = document.querySelector("#slider");
const sliderItem = Array.from(slider.children);

const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

sliderItem.forEach(function (slide, index) {
  if (index !== 0) slide.classList.add("hidden");

  slide.dataset.index = index;
  sliderItem[0].setAttribute("data-active", "");

  slide.addEventListener("click", function () {
    showNextSlider("next");
  });
});

btnNext.onclick = function () {
  showNextSlider("next");
};
btnPrev.onclick = function () {
  showNextSlider("prev");
};

function showNextSlider(direction) {
  const currentSlide = document.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  let nextSlideIndex;
  if (direction === "next") {
    nextSlideIndex = currentSlideIndex + 1 === sliderItem.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex = currentSlideIndex === 0 ? sliderItem.length - 1 : currentSlideIndex - 1;
  }

  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}
