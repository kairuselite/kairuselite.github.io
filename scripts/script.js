// ON HOVER

// const sliderContainer = document.querySelector('.slider-container');
// const slider = document.querySelector('.slider');
// const afterImage = document.querySelector('.after-image');

// sliderContainer.addEventListener('mousemove', function(e) {
//     const containerWidth = sliderContainer.offsetWidth;
//     const offsetX = e.offsetX;
//     const percentage = offsetX / containerWidth * 100;
    
//     // Move slider
//     slider.style.left = `${percentage}%`;
    
//     // Reveal more or less of the after image
//     afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
// });

// sliderContainer.addEventListener('touchmove', function(e) {
//     const touch = e.touches[0];
//     const containerWidth = sliderContainer.offsetWidth;
//     const offsetX = touch.clientX - sliderContainer.getBoundingClientRect().left;
//     const percentage = offsetX / containerWidth * 100;
    
//     // Move slider
//     slider.style.left = `${percentage}%`;
    
//     // Reveal more or less of the after image
//     afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
// });

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const afterImage = document.querySelector('.after-image');

let isDragging = false;

slider.addEventListener('mousedown', function(e) {
    isDragging = true;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        const containerRect = sliderContainer.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const containerWidth = sliderContainer.offsetWidth;
        const percentage = Math.max(0, Math.min(100, (offsetX / containerWidth) * 100));
        
        // Move slider
        slider.style.left = `${percentage}%`;
        
        // Reveal more or less of the after image
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
});

slider.addEventListener('touchstart', function(e) {
    isDragging = true;
});

document.addEventListener('touchend', function() {
    isDragging = false;
});

document.addEventListener('touchmove', function(e) {
    if (isDragging) {
        const touch = e.touches[0];
        const containerRect = sliderContainer.getBoundingClientRect();
        const offsetX = touch.clientX - containerRect.left;
        const containerWidth = sliderContainer.offsetWidth;
        const percentage = Math.max(0, Math.min(100, (offsetX / containerWidth) * 100));
        
        // Move slider
        slider.style.left = `${percentage}%`;
        
        // Reveal more or less of the after image
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
});
