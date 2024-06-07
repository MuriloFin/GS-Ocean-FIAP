document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    function toggleCard(card) {
        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
        } else {

            cards.forEach(c => c.classList.remove('expanded'));
            card.classList.add('expanded');
        }
    }

 
    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleCard(card);
        });
    });

  
    document.addEventListener('click', function () {
        cards.forEach(card => card.classList.remove('expanded'));
    });
});
