(function () {

    function initSaintSeiyaSlider() {

        document.querySelectorAll(".saint-seiya-slider").forEach(function(slider) {

            if (slider.dataset.sliderReady) return;
            slider.dataset.sliderReady = "true";

            let index = 0;
            let slides = slider.querySelectorAll(".saint-seiya-slide");
            let next = slider.querySelector(".saint-seiya-next");
            let prev = slider.querySelector(".saint-seiya-prev");

            if (!slides.length) return;

            /* Put all images on top of each other */

            slider.style.position = "relative";

            slides.forEach(function(slide, i) {

                slide.style.position = "absolute";
                slide.style.top = "0";
                slide.style.left = "0";
                slide.style.width = "100%";
                slide.style.height = "auto";
                slide.style.display = "block";

                if (i === 0) {
                    slide.style.visibility = "visible";
                } else {
                    slide.style.visibility = "hidden";
                }

            });

            /* Invisible image keeps the slider at the correct height */

            let spacer = document.createElement("img");
            spacer.src = slides[0].src;
            spacer.style.width = "100%";
            spacer.style.height = "auto";
            spacer.style.display = "block";
            spacer.style.visibility = "hidden";

            slider.insertBefore(spacer, slides[0]);

            function showSlide(newIndex) {

                slides[index].style.visibility = "hidden";

                index = newIndex;

                slides[index].style.visibility = "visible";

            }

            function changeSlide(direction) {

                let newIndex = index + direction;

                if (newIndex >= slides.length) {
                    newIndex = 0;
                }

                if (newIndex < 0) {
                    newIndex = slides.length - 1;
                }

                showSlide(newIndex);

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

    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSaintSeiyaSlider);
    } else {
        initSaintSeiyaSlider();
    }

})();
