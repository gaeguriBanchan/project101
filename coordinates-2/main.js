const xBar = document.querySelector('.xBar');
const yBar = document.querySelector('.yBar');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    xBar.style.transform = `translateX(${x}px)`;
    yBar.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
