document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".saint-seiya-slider").forEach(function(slider) {

        let index = 0;
        let slides = slider.querySelectorAll(".saint-seiya-slide");
        let next = slider.querySelector(".saint-seiya-next");
        let prev = slider.querySelector(".saint-seiya-prev");

        if (!slides.length) return;

        function showSlide(newIndex) {

            slides[index].style.display = "none";

            index = newIndex;

            slides[index].style.display = "block";

            updateHeight();
        }

        function changeSlide(n) {

            let newIndex = index + n;

            if (newIndex >= slides.length) {
                newIndex = 0;
            }

            if (newIndex < 0) {
                newIndex = slides.length - 1;
            }

            showSlide(newIndex);
        }

        function updateHeight() {

            let currentSlide = slides[index];

            if (currentSlide.complete && currentSlide.naturalHeight > 0) {
                slider.style.height = currentSlide.offsetHeight + "px";
            } else {
                currentSlide.onload = function () {
                    slider.style.height = currentSlide.offsetHeight + "px";
                };
            }
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

        if (slides[0].complete) {
            updateHeight();
        } else {
            slides[0].onload = updateHeight;
        }

        window.addEventListener("resize", updateHeight);

        setInterval(function () {
            changeSlide(1);
        }, 4000);

    });

});
