document.addEventListener("DOMContentLoaded", function() {
    const numHearts = 10; // Giảm số lượng trái tim
    for (let i = 0; i < numHearts; i++) {
        createHeart();
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.setProperty('--left', Math.random());
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
            createHeart();
        }, (Math.random() * 3 + 2) * 1000);
    }

    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        carousel.style.transform = `translateX(${-index * 100}%)`;
        currentIndex = index;
    }

    function autoSlide() {
        currentIndex++;
        showSlide(currentIndex);
        setTimeout(autoSlide, 3000); // Tự động chuyển slide sau mỗi 3 giây
    }

    showSlide(currentIndex);
    setTimeout(autoSlide, 3000); // Bắt đầu tự động chuyển slide sau 3 giây
});

// https://lovenote.vn/wp-content/uploads/2023/08/BIM_3260-copy-2.jpg
// https://lovenote.vn/wp-content/uploads/2023/09/gggg-1024x683.jpg
// https://static.vinwonders.com/production/chup-anh-cuoi-dep-17.jpg