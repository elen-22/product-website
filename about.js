// const dots = document.querySelector("#dots");
// const moreText = document.querySelector("#more");
// const btn = document.querySelector("#readMoreBtn");

more.style.display = "none";
console.log(dots)
readMoreBtn.addEventListener("click", () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        more.style.display = "none";
        readMoreBtn.textContent = "Read More";
    } else {
        dots.style.display = "none";
        more.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    }
});
