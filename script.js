const slides = [
  {
    imageDesktop: "images/desktop-image-hero-1.jpg",
    imageMobile: "images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    link: "/",
  },
  {
    imageDesktop: "images/desktop-image-hero-2.jpg",
    imageMobile: "images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    link: "/",
  },
  {
    imageDesktop: "images/desktop-image-hero-3.jpg",
    imageMobile: "images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    link: "/",
  },
];

console.log(slides);

const DOM = {
  header: document.querySelector(".site-header"),
  menuToggle: document.querySelector(".btn-menu"),
  source: document.querySelector(".hero-image source"),
  image: document.querySelector(".hero-image img"),
  title: document.querySelector(".hero-title"),
  desc: document.querySelector(".hero-desc"),
  cta: document.querySelector(".btn-cta"),
  prev: document.querySelector(".btn-prev"),
  next: document.querySelector(".btn-next"),
};

let currentSlide = 0;

function renderSlide(index) {
  const { imageDesktop, imageMobile, title, description, link } = slides[index];

  DOM.source.srcset = imageDesktop;
  DOM.image.src = imageMobile;
  DOM.image.alt = title;

  DOM.title.textContent = title;
  DOM.desc.textContent = description;
  DOM.cta.href = link;
}

function changeSlide(direction) {
  // Update the current slide index by adding the direction (e.g., -1 for prev, +1 for next)
  // The modulo ensures the index wraps around (e.g., from 0 to last slide when going backward)
  // Indonesian Translate ↓ ↓ ↓
  // Mengubah index slide saat ini dengan menambahkan nilai arah (misalnya -1 untuk sebelumnya, +1 untuk selanjutnya)
  // Penambahan slides.length berguna agar hasil tidak negatif saat dikurangi
  // Operator modulo (%) memastikan index selalu berputar dalam range panjang slides
  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  // Render the updated slide content based on the new index
  renderSlide(currentSlide);
}

// Header scroll effect
window.addEventListener("scroll", () => {
  DOM.header.classList.toggle("scroll", window.scrollY > 10);
});

// Menu toggle
DOM.menuToggle.addEventListener("click", () => {
  DOM.header.classList.toggle("open");
  DOM.menuToggle.classList.toggle("active");
});

// Slide buttons
DOM.prev.addEventListener("click", () => changeSlide(-1));
DOM.next.addEventListener("click", () => changeSlide(1));

// Init
updateHeroContent(currentIndex);
