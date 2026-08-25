document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".saint-seiya-slider").forEach(function(slider) {

        let index = 0;
        let slides = slider.querySelectorAll(".saint-seiya-slide");
        let next = slider.querySelector(".saint-seiya-next");
        let prev = slider.querySelector(".saint-seiya-prev");

        if (!slides.length) return;

        /* Put slides on top of each other */

        slides.forEach(function(slide, i) {

            slide.style.position = "absolute";
            slide.style.top = "0";
            slide.style.left = "0";
            slide.style.width = "100%";
            slide.style.height = "auto";

            if (i === 0) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }

        });

        /*
         * Invisible first image establishes the slider height.
         * This prevents the page from jumping when slides change.
         */

        let spacer = document.createElement("img");

        spacer.src = slides[0].src;

        spacer.style.width = "100%";
        spacer.style.height = "auto";
        spacer.style.display = "block";
        spacer.style.visibility = "hidden";

        slider.insertBefore(spacer, slides[0]);


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


        /* Auto change every 6 seconds */

        setInterval(function () {
            changeSlide(1);
        }, 6000);

    });

});
