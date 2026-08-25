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

            function showSlide(newIndex) {

                slides[index].style.display = "none";

                index = newIndex;

                slides[index].style.display = "block";
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
