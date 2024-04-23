const customCursor = () => {
  const cursor_primary = document.getElementById('custom_cursor');
  const circle = cursor_primary.querySelector('.custom_cursor_circle');

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor_primary, { duration: 0.7, opacity: 1, x: e.clientX, y: e.clientY, ease: 'power3.out' });
  });

  const mouseEnterHandler = (event) => {
    event.target.classList.add('move_on');
    const size = event.target.dataset.size !== undefined ? event.target.dataset.size : '100%';

    if (event.target.classList.contains('small_h')) {
      cursor_primary.classList.add('small');
    } else {
      cursor_primary.classList.remove('small');
    }

    gsap.killTweensOf(circle);
    gsap.to(circle, { duration: 0.3, width: size, height: size, autoAlpha: 1, ease: 'power0.none' });
  };

  const mouseLeaveHandler = (event) => {
    gsap.killTweensOf(circle);
    gsap.to(circle, { duration: 0.2, width: '15px', height: '15px', ease: 'power0.none' });
    event.target.classList.remove('move_on');
  };

  const customMousemoveElements = document.querySelectorAll('.custom_mousemove');

  customMousemoveElements.forEach((element) => {
    element.addEventListener('mouseenter', mouseEnterHandler);
    element.addEventListener('mouseleave', mouseLeaveHandler);
  });
}

export default customCursor;