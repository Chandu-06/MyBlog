document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function () {
        if (this.classList.contains('enlarged')) {
            this.style.transform = 'scale(1)';
            this.classList.remove('enlarged');
        } else {
            this.style.transform = 'scale(1.5)';
            this.classList.add('enlarged');
        }
    });
});
