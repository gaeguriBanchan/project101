const xBar = document.querySelector('.xBar');
const yBar = document.querySelector('.yBar');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  xBar.style.left = `${x}px`;
  yBar.style.top = `${y}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.innerHTML = `${x}px, ${y}px`
});
