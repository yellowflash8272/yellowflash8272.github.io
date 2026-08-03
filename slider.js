document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".anime-slider").forEach(function(slider) {

        let index = 0;
        let slides = slider.querySelectorAll(".anime-slide");
        let next = slider.querySelector(".slider-next");
        let prev = slider.querySelector(".slider-prev");

        if (!slides.length) return;

        function changeSlide(n) {

            slides[index].style.display = "none";

            index += n;

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

});
