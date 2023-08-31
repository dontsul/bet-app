import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/subscription.scss";
import "./styles/fonts.scss";

function toggleSlides() {
  const slide = document.querySelector(".slider__slide");
  const textFirst = document.querySelector(".text-first");
  const textSecond = document.querySelector(".text-second");

  if (slide.classList.contains("first-slide")) {
    slide.classList.remove("first-slide");
    slide.classList.add("second-slide");
    textFirst.classList.remove("active-text");
    textSecond.classList.add("active-text");
  } else {
    slide.classList.add("first-slide");
    slide.classList.remove("second-slide");
    textFirst.classList.add("active-text");
    textSecond.classList.remove("active-text");
  }
}

setInterval(toggleSlides, 7000);
