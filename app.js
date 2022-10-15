const expCard = document.querySelectorAll('.exp-card');

expCard.forEach((card)=>{
    card.addEventListener('mouseenter', (event)=>{
        expCard.forEach((elem)=>{
            elem.classList.remove('active');
        })
        event.target.classList.add('active');
    })
})



const sliderSrc = ['1','2','3','4'];

const sliderCount = document.querySelector('.slide-counter');
const leftSliderBtn =  document.querySelector('.left-slider-btn');
const rightSliderBtn =  document.querySelector('.right-slider-btn');
const sliderImage = document.querySelector(".slider-img");

let photoNumber = 0;

sliderImage.src = `images/cats/${sliderSrc[photoNumber]}.jpg`;


leftSliderBtn.addEventListener('click', ()=>{
    let dotShow = document.querySelectorAll('.dot-show');
    if(photoNumber > 0){
        photoNumber--;
        sliderImage.src = `images/cats/${sliderSrc[photoNumber]}.jpg`;
        dotShow.forEach((dot)=>{
            dot.classList.remove('active-dot');
        })
        dotShow[photoNumber].classList.add('active-dot');
    }
    else if (photoNumber === 0){
        photoNumber = sliderSrc.length -1;
        sliderImage.src = `images/cats/${sliderSrc[photoNumber]}.jpg`;
        dotShow.forEach((dot)=>{
            dot.classList.remove('active-dot');
        })
        dotShow[photoNumber].classList.add('active-dot');
    }
})




for(let i = 0; i < sliderSrc.length; i++){
    if(i === 0){
        sliderCount.innerHTML = '<span class="dot-show active-dot"></span>'
    } else {
        sliderCount.innerHTML += '<span class="dot-show"></span>'
    }
}


rightSliderBtn.addEventListener('click', ()=>{
    let dotShow = document.querySelectorAll('.dot-show');
    console.log(photoNumber);
    if(photoNumber < sliderSrc.length - 1){
        photoNumber ++;
        sliderImage.src = `images/cats/${sliderSrc[photoNumber]}.jpg`;
        dotShow.forEach((dot)=>{
            dot.classList.remove('active-dot');
        })
        dotShow[photoNumber].classList.add('active-dot');
    }
    else if (photoNumber === sliderSrc.length - 1){
        photoNumber = 0;
        sliderImage.src = `images/cats/${sliderSrc[photoNumber]}.jpg`;
        dotShow.forEach((dot)=>{
            dot.classList.remove('active-dot');
        })
        dotShow[photoNumber].classList.add('active-dot');
    }
})

