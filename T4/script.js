const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')
document.addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})
const words = [
    "Lunar New Year",
    "Lunar New Year", 
    "Tết Nguyên Đán",
    "Tết Nguyên Đán", 
    "설날", 
    "お正月",
];
let currentWordIndex = 0;
function changeWord() {
    const wordElement = document.getElementById("word");
    wordElement.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length; 
}
setInterval(changeWord, 3000);
function updateCountdown() {
    const targetDate = new Date('2025-02-01T00:00:00');
    const now = new Date();
    const timeRemaining = targetDate - now;
    if (timeRemaining <= 0) {
        document.getElementById('countdown').textContent = 'Happy Lunar New Year!';
        return;
    }
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById('countdown').textContent = `Còn ${days}Ngày ${hours}Giờ ${minutes}Phút ${seconds}Giây`;
}
setInterval(updateCountdown, 1);

document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.images-container');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imagesContainer.classList.add('visible');
                imagesContainer.classList.remove('hidden');
            } else {
                imagesContainer.classList.add('hidden');
                imagesContainer.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });
    observer.observe(imagesContainer);
});
