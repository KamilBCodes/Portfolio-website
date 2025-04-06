document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const handleBoxClick = (event) => {
        const box = event.currentTarget;
        const link = box.getAttribute('data-link');

        if (link) {
            window.location.href = link;
        } else {
            console.error('No data-link attribute found for this box.');
        }
    };

    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    });
});
