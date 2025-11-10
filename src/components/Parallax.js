export function initParallax() {
  const headerContent = document.querySelector(".header-content");
  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image img");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (headerContent) {
      headerContent.style.transform = `translateY(${scrollY * 0.1}px)`;
    }

    if (aboutText) {
      aboutText.style.transform = `translateY(${-scrollY * 0.4}px)`;
    }

    if (aboutImage) {
      aboutImage.style.transform = `translateY(${scrollY * 0.0}px) scale(1.02)`;
    }
  });
}
