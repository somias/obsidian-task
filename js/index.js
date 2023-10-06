document.addEventListener("DOMContentLoaded", function () {
  /* Adds or removes one product from the cart. */
  const plus = document.querySelector(".plus");
  const min = document.querySelector(".min");
  const num = document.querySelector(".num");

  plus.addEventListener("click", function () {
    const currentNum = parseInt(num.textContent);
    num.textContent = currentNum + 1;
  });

  min.addEventListener("click", function () {
    const currentNum = parseInt(num.textContent);
    if (currentNum > 1) {
      num.textContent = currentNum - 1;
    }
  });

  /* Ingredients expand/collapse */
  document.querySelectorAll(".ingredients-section-item").forEach((item) => {
    const header = item.querySelector(".ingredients-section-item-header");
    const span = header.querySelector("span");

    header.addEventListener("click", () => {
      item.classList.toggle("is-open");

      /* Show minus on expand, and show plus on collapse */
      if (item.classList.contains("is-open")) {
        span.textContent = "-";
      } else {
        span.textContent = "+";
      }
    });
  });

  /* Carousel */
  $("#product-list").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
