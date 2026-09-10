const body = document.body;
const page = document.documentElement;
const button = document.getElementById('myButton');
const revealButtons = document.querySelectorAll('.reveal-answer-button');

let backgroundIsDark = false;

if (button) {
    button.addEventListener('click', toggleBackground);
}

revealButtons.forEach(function(revealButton) {
    saveOriginalContent(revealButton);
    revealButton.addEventListener('click', revealAnswer);
});

function saveOriginalContent(revealButton) {
    const contentSection = revealButton.closest('.intro-content');
    const image = contentSection ? contentSection.querySelector('.quiz-image') : null;
    const statement = contentSection ? contentSection.querySelector('.quiz-statement, .intro-instruction') : null;

    revealButton.dataset.revealed = 'false';

    if (image) {
        revealButton.dataset.originalImage = image.getAttribute('src');
        revealButton.dataset.originalAlt = image.getAttribute('alt') || '';
    }

    if (statement) {
        revealButton.dataset.originalStatement = statement.textContent;
    }
}

function toggleBackground() {
    if (backgroundIsDark) {
        resetBackground();
    } else {
        changeBackground();
    }
}

function changeBackground() {
    if (backgroundIsDark) {
        return;
    }

    backgroundIsDark = true;
    body.style.backgroundColor = '#050505';
    page.style.setProperty('--paper', '#050505');
    page.style.setProperty('--paper-soft', '#202020');
    page.style.setProperty('--ink', '#fbfaf5');
    page.style.setProperty('--muted', '#b8b2a8');
    page.style.setProperty('--line', '#fbfaf5');
    page.style.setProperty('--line-soft', 'rgba(251, 250, 245, 0.22)');

    if (button) {
        button.textContent = 'Light Background';
        button.setAttribute('aria-pressed', 'true');
    }
}

function resetBackground() {
    backgroundIsDark = false;
    body.style.removeProperty('background-color');
    page.style.removeProperty('--paper');
    page.style.removeProperty('--paper-soft');
    page.style.removeProperty('--ink');
    page.style.removeProperty('--muted');
    page.style.removeProperty('--line');
    page.style.removeProperty('--line-soft');

    if (button) {
        button.textContent = 'Change Background';
        button.setAttribute('aria-pressed', 'false');
    }
}

function revealAnswer(event) {
    const revealButton = event.currentTarget;

    if (revealButton.dataset.revealed === 'true') {
        hideAnswer(revealButton);
    } else {
        showAnswer(revealButton);
    }
}

function showAnswer(revealButton) {
    const contentSection = revealButton.closest('.intro-content');
    const image = contentSection ? contentSection.querySelector('.quiz-image') : null;
    const statement = contentSection ? contentSection.querySelector('.quiz-statement') : null;
    const answerText = revealButton.parentElement.querySelector('.quiz-answer');
    const answer = revealButton.dataset.answer;
    const revealStatement = revealButton.dataset.revealStatement;
    const revealImage = revealButton.dataset.revealImage;
    const revealAlt = revealButton.dataset.revealAlt;

    changeBackground();

    if (image && revealImage) {
        image.src = revealImage;

        if (revealAlt) {
            image.alt = revealAlt;
        }
    }

    if (statement && revealStatement) {
        statement.textContent = revealStatement;
    }

    if (answerText) {
        answerText.textContent = answer;
        answerText.classList.toggle('is-false', answer.trim().toUpperCase().startsWith('FALSE'));
    }

    revealButton.textContent = 'Try Again';
    revealButton.setAttribute('aria-pressed', 'true');
    revealButton.dataset.revealed = 'true';
}

function hideAnswer(revealButton) {
    const contentSection = revealButton.closest('.intro-content');
    const image = contentSection ? contentSection.querySelector('.quiz-image') : null;
    const statement = contentSection ? contentSection.querySelector('.quiz-statement, .intro-instruction') : null;
    const answerText = revealButton.parentElement.querySelector('.quiz-answer');

    resetBackground();

    if (image && revealButton.dataset.originalImage) {
        image.src = revealButton.dataset.originalImage;
        image.alt = revealButton.dataset.originalAlt || '';
    }

    if (statement && revealButton.dataset.originalStatement) {
        statement.textContent = revealButton.dataset.originalStatement;
    }

    if (answerText) {
        answerText.textContent = '';
        answerText.classList.remove('is-false');
    }

    revealButton.textContent = 'Reveal Answer';
    revealButton.setAttribute('aria-pressed', 'false');
    revealButton.dataset.revealed = 'false';
}
