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

            function updateHeight() {
                let current = slides[index];

                if (current) {
                    slider.style.height = current.offsetHeight + "px";
                }
            }

            function showSlide(newIndex) {

                slides[index].style.display = "none";

                index = newIndex;

                slides[index].style.display = "block";

                updateHeight();
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
                next.addEventListener("click", function () {
                    changeSlide(1);
                });
            }

            if (prev) {
                prev.addEventListener("click", function () {
                    changeSlide(-1);
                });
            }

            slides[0].addEventListener("load", updateHeight);

            if (slides[0].complete) {
                updateHeight();
            }

            window.addEventListener("resize", updateHeight);

            setInterval(function () {
                changeSlide(1);
            }, 4000);

        });

    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSaintSeiyaSlider);
    } else {
        initSaintSeiyaSlider();
    }

})();
