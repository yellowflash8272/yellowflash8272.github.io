(function () {

    function initSaintSeiyaSlider() {

        document.querySelectorAll(".saint-seiya-slider").forEach(function (slider) {

            if (slider.dataset.sliderReady) return;
            slider.dataset.sliderReady = "true";

            let index = 0;
            let slides = slider.querySelectorAll(".saint-seiya-slide");
            let next = slider.querySelector(".saint-seiya-next");
            let prev = slider.querySelector(".saint-seiya-prev");

            if (!slides.length) return;

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
            }, 6000);

        });

    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSaintSeiyaSlider);
    } else {
        initSaintSeiyaSlider();
    }

})();
