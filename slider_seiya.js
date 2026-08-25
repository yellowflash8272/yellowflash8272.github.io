document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".saint-seiya-slider").forEach(function (slider) {

        let index = 0;

        let slides = slider.querySelectorAll(".saint-seiya-slide");

        let next = slider.querySelector(".saint-seiya-next");

        let prev = slider.querySelector(".saint-seiya-prev");

        if (!slides.length) return;


        /* Set up slides */

        slides.forEach(function (slide, i) {

            slide.style.position = "absolute";
            slide.style.top = "0";
            slide.style.left = "0";
            slide.style.width = "100%";

            slide.style.display = i === 0 ? "block" : "none";

        });


        slider.style.position = "relative";


        /* Change slide */

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


        /* Next */

        if (next) {

            next.onclick = function () {
                changeSlide(1);
            };

        }


        /* Previous */

        if (prev) {

            prev.onclick = function () {
                changeSlide(-1);
            };

        }


        /* Auto change every 6 seconds */

        setInterval(function () {
            changeSlide(1);
        }, 6000);

    });

});
