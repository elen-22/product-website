const slides = document.querySelectorAll(".carousel-slide");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let currentIndex = 0;

window.addEventListener("DOMContentLoaded",()=>{
    if(slides.length>0){
        slides[currentIndex].classList.add("activeSlide")
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
}

nextBtn.addEventListener("click",()=>{
    currentIndex++
    displaySlide(currentIndex)
})

prevBtn.addEventListener("click",()=>{
    currentIndex--
    displaySlide(currentIndex)
})