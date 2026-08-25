document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".anime-slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".anime-slide");
    const next = slider.querySelector(".slider-next");
    const prev = slider.querySelector(".slider-prev");

    if (!slides.length) return;

    let index = 0;

    slides.forEach(function (slide, i) {
        slide.style.position = "absolute";
        slide.style.top = "0";
        slide.style.left = "0";
        slide.style.width = "100%";
        slide.style.display = i === 0 ? "block" : "none";
    });

    function changeSlide(direction) {

        slides[index].style.display = "none";

        index += direction;

        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        slides[index].style.display = "block";
    }

    if (next) {
        next.onclick = function () {
            changeSlide(1);
        };
    }

    if (prev) {
        prev.onclick = function () {
            changeSlide(-1);
        };
    }

    setInterval(function () {
        changeSlide(1);
    }, 4000);

});
