document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".saint-seiya-slider").forEach(function(slider) {

        let index = 0;

        let slides = slider.querySelectorAll(".saint-seiya-slide");

        let next = slider.querySelector(".saint-seiya-next");

        let prev = slider.querySelector(".saint-seiya-prev");

        if (!slides.length) return;


        /* Slider */

        slider.style.position = "relative";


        /* Images */

        slides.forEach(function(slide, i) {

            slide.style.position = "absolute";

            slide.style.top = "0";

            slide.style.left = "0";

            slide.style.width = "100%";

            slide.style.height = "auto";

            slide.style.display = i === 0 ? "block" : "none";

        });


        /* Buttons */

        if (next) {

            next.style.position = "absolute";

            next.style.right = "10px";

            next.style.top = "50%";

            next.style.transform = "translateY(-50%)";

            next.style.zIndex = "10";

            next.style.background = "#d4af37";

            next.style.color = "white";

            next.style.border = "0";

            next.style.padding = "8px 14px";

            next.style.fontSize = "20px";

            next.style.cursor = "pointer";

        }


        if (prev) {

            prev.style.position = "absolute";

            prev.style.left = "10px";

            prev.style.top = "50%";

            prev.style.transform = "translateY(-50%)";

            prev.style.zIndex = "10";

            prev.style.background = "#d4af37";

            prev.style.color = "white";

            prev.style.border = "0";

            prev.style.padding = "8px 14px";

            prev.style.fontSize = "20px";

            prev.style.cursor = "pointer";

        }


        /* Change slide */

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


        /* Buttons */

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


        /* Automatic change every 6 seconds */

        setInterval(function () {

            changeSlide(1);

        }, 6000);

    });

});
