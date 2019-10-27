const t = new TimelineMax();

const decide = document.querySelector('.decide');
decide.addEventListener('click', () => {
    t.to('.cover', 1, { width: '100%', ease: Power4.easeInOut })
        .to('.cover', 1, { width: '0%', ease: Power4.easeInOut })
});