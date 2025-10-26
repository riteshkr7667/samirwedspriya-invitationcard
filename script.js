(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

/**
 * Auto-play music
 */
window.addEventListener('load', () => {
    const audio = document.getElementById("my_audio");

    const tryPlay = () => {
        audio.play().then(() => {
            console.log("🎵 Music playing automatically!");
        }).catch(err => {
            console.log("Autoplay blocked. Click anywhere to play music.", err);
            document.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    };

    tryPlay();
});

// Falling leaves animation
(function createLeaves() {
    const container = document.querySelector('.sakura-falling');
    if (!container) return;

    const leafCount = 15; // number of leaves
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDuration = 5 + Math.random() * 5 + 's';
        leaf.style.animationDelay = Math.random() * 5 + 's';
        leaf.style.transform = `scale(${0.5 + Math.random()}) rotate(${Math.random()*360}deg)`;
        container.appendChild(leaf);
    }
})();

/**
 * Click anywhere to play music (fallback)
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Countdown
var countDownDate = new Date("Nov 29, 2024 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML =
        "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" +
        "<div class='hours block'>" + hours + "<br>Hours</div>" +
        "<div class='minutes block'>" + minutes + "<br>Minutes</div>" +
        "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// Console styles
var styles = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 4px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
);
