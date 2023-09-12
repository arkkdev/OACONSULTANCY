document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card_container');
    const cards = document.querySelector('.cards');
    const cardWidth = document.querySelector('.card').offsetWidth + parseFloat(getComputedStyle(document.querySelector('.card')).marginRight);
    const totalScrollWidth = cards.scrollWidth - cardContainer.offsetWidth;

    cardContainer.addEventListener('scroll', () => {
        if (cardContainer.scrollLeft <= 0) {
            const lastCard = cards.lastElementChild.cloneNode(true);
            cards.removeChild(cards.lastElementChild);
            cards.insertBefore(lastCard, cards.firstElementChild);
            cardContainer.scrollLeft += cardWidth;
        } else if (cardContainer.scrollLeft >= totalScrollWidth - cardWidth) {
            const firstCard = cards.firstElementChild.cloneNode(true);
            cards.removeChild(cards.firstElementChild);
            cards.appendChild(firstCard);
            cardContainer.scrollLeft -= cardWidth;
        }
    });
});