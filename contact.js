const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");
const messageError = document.querySelector("#messageError");
const thankYouSection = document.querySelector("#thankYouSection");
const newMessageBtn = document.querySelector("#newMessageBtn");

form.addEventListener("submit",(e)=>{
     e.preventDefault()
    const nameRegex = /^[A-Za-z\s]{2,50}$/; 
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^\+?[0-9\s-\(\)]{7,20}$/;

    let isValid = true;

    if (!nameRegex.test(nameInput.value.trim())) {
        nameError.style.opacity = 1;
        isValid = false;
    } else {
        nameError.style.opacity=0;
    }
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.opacity = 1;
        isValid = false;
    } else {
        emailError.style.opacity = 0;
    }
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.style.opacity = 1;
        isValid = false;
    } else {
        phoneError.style.opacity = 0;
    }
    if (messageInput.value.trim().length < 5) {
        messageError.style.opacity = 1;
        isValid = false;
    } else {
        messageError.style.opacity = 0;
    }
    if (isValid) {
        form.style.display = "none";
        thankYouSection.style.display = "block";
        form.submit()
    }
    
})
newMessageBtn.addEventListener("click", () => {
    thankYouSection.style.display = "none";
    form.style.display = "block";
});


