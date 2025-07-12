// const dots = document.querySelector("#dots");
const moreText = document.querySelector("#more");
const btn = document.querySelector("#readMoreBtn");

moreText.style.display = "none";

btn.addEventListener("click", () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.textContent = "Read More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    }
});
