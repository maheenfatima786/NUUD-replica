document.getElementById('hamburgerBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.add('open');
    });
    document.getElementById('mobileMenuClose').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
    });

    function updateCountdown() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;
      const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
      document.getElementById('cdHours').textContent = h;
      document.getElementById('cdMins').textContent = m;
      document.getElementById('cdSecs').textContent = s;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // --- Product Variant Switcher ---
    document.addEventListener("DOMContentLoaded", function () {

  const variantItems = document.querySelectorAll('.variant-item');
  const mainImg = document.getElementById('mainProductImg');
  const variantBadge = document.getElementById('variantBadge');
  const variantName = document.getElementById('variantName');

  variantItems.forEach(item => {
    item.addEventListener('click', () => {

      variantItems.forEach(v => v.classList.remove('active'));
      item.classList.add('active');

      const imgSrc = item.getAttribute('data-img');
      const fallback = item.getAttribute('data-fallback');

      mainImg.src = imgSrc;

      mainImg.onerror = () => {
        mainImg.src = fallback;
      };

      const name = item.getAttribute('data-variant');

      if (variantBadge) variantBadge.textContent = name;
      if (variantName) variantName.textContent = name;
    });
  });

});

const slider = document.getElementById('videoSlider');
const slides = document.querySelectorAll('.video-slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
const totalSlides = slides.length;

// Function to update slider position
function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 20; // width + margin
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Next button click
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= totalSlides) currentIndex = 0; // loop to start
  updateSlider();
});

// Previous button click
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = totalSlides - 1; // loop to end
  updateSlider();
});
    // --- Water Report Form ---
    document.getElementById('waterFormBtn').addEventListener('click', () => {
      document.getElementById('waterFormMsg').textContent = 'YOUR WATER REPORT IS ON ITS WAY!';

      
    });

    