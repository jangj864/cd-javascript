const pattern = document.getElementById('pattern');
const modeLabel = document.getElementById('modeLabel');
const transformButton = document.getElementById('transform-pattern');

// VARIABLES
let isDisordered = false;
let patternStep = 0;
const coneTotal = 180;

// FUNCTION
function chooseColumns() {
    let columns;

    if (window.innerWidth < 560) {
        columns = 10;
    } else if (window.innerWidth < 900) {
        columns = 15;
    } else {
        columns = 20;
    }

    return columns;
}

// FUNCTION
function generatePattern() {
    pattern.innerHTML = '';

    const columns = chooseColumns();
    const rows = Math.ceil(coneTotal / columns);

    pattern.style.setProperty('--columns', columns);
    pattern.style.setProperty('--rows', rows);

    if (isDisordered) {
        pattern.classList.add('is-disordered');
        modeLabel.textContent = 'Click to restore order';
    } else {
        pattern.classList.remove('is-disordered');
        modeLabel.textContent = 'Click to disturb the system';
    }
    transformButton.textContent = isDisordered ? 'Restore order ↗' : 'Disturb system ↗';
    transformButton.setAttribute('aria-pressed', String(isDisordered));

    // LOOP
    for (let i = 0; i < coneTotal; i = i + 1) {
        // VARIABLES OF CHANGE
        let rotation = ((i % 5) - 2) * 2;
        let scale = 0.82 + (i % 4) * 0.05;
        let opacity = 0.74 + (i % 6) * 0.04;
        let xOffset = 0;
        let yOffset = 0;
        let bodyWidth = 58 + (i % 3) * 4;
        let baseWidth = 72 + (i % 4) * 3;
        let coneColor = '#ff4a1c';

        // IF STATEMENT
        if (i % 13 === 0) {
            rotation = rotation + 22;
            scale = scale * 1.18;
            xOffset = ((i % 4) - 1.5) * 8;
            yOffset = ((i % 3) - 1) * 10;
            bodyWidth = 76;
            baseWidth = 92;
            opacity = 1;
            coneColor = '#111111';
        } else if (i % 7 === 0) {
            rotation = rotation - 14;
            scale = scale * 0.86;
            xOffset = ((i % 6) - 2.5) * 5;
            yOffset = ((i % 5) - 2) * 4;
            bodyWidth = 50;
            coneColor = '#f36c21';
        } else {
            rotation = rotation + (i % 2);
            yOffset = (i % 3) - 1;
        }

        if (isDisordered) {
            rotation = rotation + ((i * 17 + patternStep * 9) % 38) - 19;
            scale = scale + (((i + patternStep) % 4) * 0.04);
            xOffset = xOffset + (((i + patternStep) % 5) - 2) * 6;
            yOffset = yOffset + (((i * 3 + patternStep) % 5) - 2) * 5;
        }

        // DYNAMIC HTML CREATION
        const module = document.createElement('div');
        module.className = 'module';

        const cone = document.createElement('div');
        cone.className = 'cone';
        cone.style.setProperty('--rotation', rotation + 'deg');
        cone.style.setProperty('--scale', scale);
        cone.style.setProperty('--opacity', opacity);
        cone.style.setProperty('--x-offset', xOffset + 'px');
        cone.style.setProperty('--y-offset', yOffset + 'px');
        cone.style.setProperty('--body-width', bodyWidth + '%');
        cone.style.setProperty('--base-width', baseWidth + '%');
        cone.style.setProperty('--cone-color', coneColor);
        cone.style.setProperty('--delay', (i % 12) * -0.12 + 's');

        const coneBody = document.createElement('div');
        coneBody.className = 'cone-body';

        const stripeOne = document.createElement('span');
        stripeOne.className = 'cone-stripe cone-stripe-one';

        const stripeTwo = document.createElement('span');
        stripeTwo.className = 'cone-stripe cone-stripe-two';

        const base = document.createElement('div');
        base.className = 'cone-base';

        coneBody.appendChild(stripeOne);
        coneBody.appendChild(stripeTwo);
        cone.appendChild(coneBody);
        cone.appendChild(base);
        module.appendChild(cone);
        pattern.appendChild(module);
    }
}

// FUNCTION
function transformPattern() {
    isDisordered = !isDisordered;
    patternStep = patternStep + 1;
    generatePattern();
}

generatePattern();

// INTERACTION
pattern.addEventListener('click', transformPattern);
transformButton.addEventListener('click', transformPattern);

window.addEventListener('resize', generatePattern);
