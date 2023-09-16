/* Challenge: Blast Off! https://chat.openai.com/

Prompt ChatGPT to convert the JQuery to plain JavaScript, and the Tailwind
code in index.css to plain CSS. Then click
the Blast Off button to see if it works. If you've converted successfully:

1. Clicking the Blast Off Button should start a countdown timer
2. The rocket ship should take off when the countdown reaches zero 
*/

/* const $startButton = $('#startButton');
const $timerDisplay = $('#timer');
const $rocket = $('.rocket');

$startButton.click(() => {
    let countdown = 3;

    const intervalId = setInterval(() => {
        $timerDisplay.text(countdown);

        if (countdown === 0) {
            clearInterval(intervalId);
            rocketBlast();
        }

        countdown--;
    }, 1000);
});

function rocketBlast() {
    $rocket.css('display', 'block');
    setTimeout(() => {
        $rocket.css('transform', 'translateX(50vh) translateY(-150vh)');
    }, 500);
}
*/

const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');
const rocket = document.querySelector('.rocket');

startButton.addEventListener('click', () => {
    let countdown = 3;

    const intervalId = setInterval(() => {
        timerDisplay.textContent = countdown;

        if (countdown === 0) {
            clearInterval(intervalId);
            rocketBlast();
        }

        countdown--;
    }, 1000);
});

function rocketBlast() {
    rocket.style.display = 'block';
    setTimeout(() => {
        rocket.style.transform = 'translateX(50vh) translateY(-150vh)';
    }, 500);
}


