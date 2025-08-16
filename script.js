
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const captions = document.querySelectorAll(".slide-caption"); // Add this line to select captions

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  // Update captions to match the active slide
captions.forEach((caption, i) => {
    caption.style.display = i === index ? "block" : "none";
});
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto slide
setInterval(nextSlide, 4000);
