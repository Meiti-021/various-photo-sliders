const expCard = document.querySelectorAll('.exp-card');


expCard.forEach((card)=>{
    card.addEventListener('mouseenter', (event)=>{
        expCard.forEach((elem)=>{
            elem.classList.remove('active');
        })
        event.target.classList.add('active');
    })
})