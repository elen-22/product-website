const slides = document.querySelectorAll(".carousel-slide");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

window.addEventListener("DOMContentLoaded",()=>{
    if(slides.length>0){
        slides[currentIndex].classList.add("activeSlide")
        //new
        dots[currentIndex].classList.add("active");
    }
   
})

function displaySlide(index){
    
    if(index>=slides.length){
        currentIndex=0
    }
    //when we want to go from first image to the last
    else if(index<0){
        currentIndex=slides.length-1
    }

    slides.forEach(slide => slide.classList.remove("activeSlide"))
    slides[currentIndex].classList.add("activeSlide")

    //new
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click",()=>{
    currentIndex++
    displaySlide(currentIndex)
    
})

prevBtn.addEventListener("click",()=>{
    currentIndex--
    displaySlide(currentIndex)
})

dots.forEach(el=>{
    
    el.addEventListener('click', () => {
        dots.forEach(el=>el.classList.remove("active"))
        currentIndex=+el.dataset.index
        el.classList.add("active")
        displaySlide(currentIndex);
    });
})