window.addEventListener("scroll", function () {
  const parallaxContent1 = document.querySelector(".parallax-content1");
  const distanceFromTop = parallaxContent1.getBoundingClientRect().top;

  // If the element is in the viewport
  if (distanceFromTop < window.innerHeight * 0.75) {
    parallaxContent1.classList.add("visible");
  } else {
    parallaxContent1.classList.remove("visible");
  }
});
window.addEventListener("scroll", function () {
  const parallaxContent2 = document.querySelector(".parallax-content2");
  const distanceFromTop = parallaxContent2.getBoundingClientRect().top;

  // If the element is in the viewport
  if (distanceFromTop < window.innerHeight * 0.75) {
    parallaxContent2.classList.add("visible");
  } else {
    parallaxContent2.classList.remove("visible");
  }
});
