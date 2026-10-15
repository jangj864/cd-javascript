function addLine(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const line = document.createElement('div');

  line.style.width = '2px';
  line.style.height = '0px';
  line.style.backgroundColor = 'green';
  line.style.position = 'fixed';
  line.style.left = `${mouseX}px`;
  line.style.bottom = `${window.innerHeight - mouseY}px`;
  line.style.transition = 'height 2s';
  line.style.pointerEvents = 'none';

  document.body.append(line);

  setTimeout(function() {
    line.style.height = '250px';
  }, 10);

};


document.addEventListener('click', addLine);
