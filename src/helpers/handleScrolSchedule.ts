export const handleScroll = () => {
    const seccionDestino = document.getElementById('schedule');

    if (seccionDestino) {
        const offset = seccionDestino.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });
    }
};
