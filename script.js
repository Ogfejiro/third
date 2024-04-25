const bubbles = document.querySelectorAll(".bubbles img");

function animateBubbles() {
  bubbles.forEach((bubble, index) => {
    const delay = index * 500; // Adjust delay based on desired spacing (milliseconds)
    bubble.style.animationDelay = `${delay}ms`;
  });
}

const images = document.querySelectorAll(".image");

const options = {
  root: null,
  threshold: 0.5, // Image becomes visible when 50% in viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

images.forEach((image) => observer.observe(image));

animateBubbles();
