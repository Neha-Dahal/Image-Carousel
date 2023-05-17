const carouselImageWrapper = document.querySelector(".carousel-image-wrapper");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const indicators = document.querySelectorAll(".indicator");

const timing = 2000;

let currentIndex = 0;
let intervalId;

function updateCarousel() {
  carouselImageWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function goToNextSlide() {
  if (currentIndex === indicators.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
}

function goToPrevSlide() {
  if (currentIndex === 0) {
    currentIndex = indicators.length - 1;
  } else {
    currentIndex--;
  }
  updateCarousel();
}

function startInterval() {
  intervalId = setInterval(goToNextSlide, timing);
}

function stopInterval() {
  clearInterval(intervalId);
}

nextButton.addEventListener("click", function () {
  stopInterval();
  goToNextSlide();
  startInterval();
});

prevButton.addEventListener("click", function () {
  stopInterval();
  goToPrevSlide();
  startInterval();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", function () {
    stopInterval();
    goToSlide(index);
    startInterval();
  });
});

startInterval();
