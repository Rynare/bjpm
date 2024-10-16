const swiperEl = document.querySelector("swiper-container");
const progressBar = document.querySelector(".progress-bar .progress");

swiperEl.addEventListener("swiperprogress", (event) => {
  const [swiper, progress] = event.detail;
  progressBar.style.width = `${progress * 100}%`;
});
