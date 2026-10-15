const pad = document.getElementById('pad');
let isDrawing = false;

function drawDot(event) {
  const rect = pad.getBoundingClientRect();
  const x = event.clientX - rect.left - pad.clientLeft;
  const y = event.clientY - rect.top - pad.clientTop;

  const dot = document.createElement('div');

  dot.style.width = '6px';
  dot.style.height = '6px';
  dot.style.borderRadius = '50%';
  dot.style.backgroundColor = 'black';
  dot.style.position = 'absolute';
  dot.style.left = `${x - 3}px`;
  dot.style.top = `${y - 3}px`;
  dot.style.pointerEvents = 'none';

  pad.append(dot);
}

pad.addEventListener('mousedown', function(event) {
  if (event.button !== 0) return;

  isDrawing = true;
  drawDot(event);
});

pad.addEventListener('mousemove', function(event) {
  if (!isDrawing) return;

  drawDot(event);
});

document.addEventListener('mouseup', function() {
  isDrawing = false;
});

window.addEventListener('blur', function() {
  isDrawing = false;
});