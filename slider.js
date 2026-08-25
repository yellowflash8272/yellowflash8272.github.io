document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".anime-slider").forEach(function (slider) {

        let index = 0;
        let slides = slider.querySelectorAll(".anime-slide");
        let next = slider.querySelector(".slider-next");
        let prev = slider.querySelector(".slider-prev");

        if (!slides.length) return;

        /* Position all slides on top of each other */

        slides.forEach(function (slide, i) {

            slide.style.position = "absolute";
            slide.style.top = "0";
            slide.style.left = "0";
            slide.style.width = "100%";

            if (i === 0) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }

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


        /* Previous button */

        if (prev) {

            prev.onclick = function () {
                changeSlide(-1);
            };

        }


        /* Next button */

        if (next) {

            next.onclick = function () {
                changeSlide(1);
            };

        }


        /* Automatic change every 4 seconds */

        setInterval(function () {
            changeSlide(1);
        }, 4000);

    });

});
