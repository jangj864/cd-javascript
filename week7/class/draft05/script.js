// @ts-check

/** @param {MouseEvent} event */
function addBox(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const randomColor = `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
  )`;

  const box = document.createElement('div');

  box.style.width = '100px';
  box.style.height = '100px';
  box.style.borderRadius = '50%';
  box.style.backgroundColor = randomColor;
  box.style.position = 'fixed';
  box.style.left = `${mouseX - 50}px`;
  box.style.top = `${mouseY - 50}px`;

  document.body.append(box);
}

document.addEventListener('click', addBox);