const customCursor = () => {
  if (window.innerWidth < 1200) return;

  const cursorPrimary = document.getElementById('custom_cursor');
  const circle = cursorPrimary.querySelector('.custom_cursor_circle');

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursorPrimary, { duration: 0.7, opacity: 1, x: e.clientX, y: e.clientY, ease: 'power3.out' });
  });

  const mouseEnterHandler = (event) => {
    event.target.classList.add('move_on');
    gsap.killTweensOf(circle);
    gsap.to(circle, { duration: 0.3, width: '100%', height: '100%', autoAlpha: 1, ease: 'power0.none' });
  };

  const mouseLeaveHandler = (event) => {
    gsap.killTweensOf(circle);
    gsap.to(circle, { duration: 0.2, width: '15px', height: '15px', ease: 'power0.none' });
    event.target.classList.remove('move_on');
  };

  document.querySelectorAll('.custom_mousemove').forEach((el) => {
    el.addEventListener('mouseenter', mouseEnterHandler);
    el.addEventListener('mouseleave', mouseLeaveHandler);
  });
}

export default customCursor;