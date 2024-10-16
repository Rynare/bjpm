document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      productCards.forEach((card) => {
        if (filter === "all") {
          card.classList.add("active");
        } else {
          if (card.getAttribute("data-category") === filter) {
            card.classList.add("active");
          } else {
            card.classList.remove("active");
          }
        }
      });
    });
  });

  document.querySelector('.filter-btn[data-filter="all"]').click();
});
