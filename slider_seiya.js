document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".saint-seiya-slider").forEach(function(slider) {

        let index = 0;
        let slides = slider.querySelectorAll(".saint-seiya-slide");
        let next = slider.querySelector(".saint-seiya-next");
        let prev = slider.querySelector(".saint-seiya-prev");

        if (!slides.length) return;

        slides.forEach(function(slide, i) {
            slide.style.position = "absolute";
            slide.style.top = "0";
            slide.style.left = "0";
            slide.style.width = "100%";
            slide.style.display = i === 0 ? "block" : "none";
        });

        slider.style.position = "relative";

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
