let swiper = new Swiper(".mySwiper", {
  loop: true, // Enable looping
  autoplay: {
    delay: 3000, // Time between slides (in ms)
    disableOnInteraction: false, // Keep autoplay running after user interaction
  },
  slidesPerView: 1, // Show 1 slide at a time
  spaceBetween: 10, // Space between slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allow users to click pagination dots
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
