const swiperEl = document.querySelector("swiper-container");
const progressBar = document.querySelector(".progress-bar .progress");

swiperEl.addEventListener("swiperprogress", (event) => {
  const [swiper, progress] = event.detail;
  progressBar.style.width = `${progress * 100}%`;
});

document.addEventListener("DOMContentLoaded", () => {
  const thumbnail = document.querySelector(".thumbnail");
  thumbnail.addEventListener("click", () => {
    const target = document.querySelector(thumbnail.getAttribute("target"));
    thumbnail.classList.add("hidden");
    target.classList.remove("opacity-0");
    target.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  });
});
