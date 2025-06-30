// Fade in the h2 after page load
window.addEventListener("DOMContentLoaded", function () {
  const h2 = document.querySelector("h2.dom-title-h2");
  if (h2) {
    // Remove and re-add the fade-in class to trigger animation
    h2.classList.remove("fade-in");
    // Force reflow to restart animation
    void h2.offsetWidth;
    h2.classList.add("fade-in");
  }
});
