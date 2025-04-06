document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');

  const handleBoxActivation = (event) => {
    if (event.type === 'click' || event.key === 'Enter') {
      const box = event.currentTarget;
      const link = box.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      } else {
        console.error('No data-link attribute found for this box.');
      }
    }
  };

  boxes.forEach(box => {
    box.addEventListener('click', handleBoxActivation);
    box.addEventListener('keydown', handleBoxActivation);
  });
});
