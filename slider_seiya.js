(function () {

    /* Saint Seiya Slider CSS */

    const style = document.createElement("style");

    style.textContent = `
        .saint-seiya-slider {
            position: relative !important;
            width: 70% !important;
            max-width: 700px !important;
            margin: auto !important;
            overflow: hidden !important;
            aspect-ratio: 2 / 3 !important;
        }

        .saint-seiya-slide {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            object-position: top center !important;
            visibility: hidden !important;
        }

        .saint-seiya-slide.active {
            visibility: visible !important;
        }

        .saint-seiya-prev,
        .saint-seiya-next {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 10 !important;

            background: #d4af37 !important;
            color: white !important;

            border: 0 !important;
            padding: 8px 14px !important;
            font-size: 20px !important;
            font-weight: bold !important;
            cursor: pointer !important;
        }

        .saint-seiya-prev {
            left: 10px !important;
        }

        .saint-seiya-next {
            right: 10px !important;
        }

        .saint-seiya-prev:hover,
        .saint-seiya-next:hover {
            opacity: 0.8 !important;
        }
    `;

    document.head.appendChild(style);


    /* Initialize Slider */

    function initSaintSeiyaSlider() {

        document.querySelectorAll(".saint-seiya-slider").forEach(function (slider) {

            if (slider.dataset.sliderReady) return;

            slider.dataset.sliderReady = "true";

            let index = 0;

            let slides = slider.querySelectorAll(".saint-seiya-slide");

            let next = slider.querySelector(".saint-seiya-next");

            let prev = slider.querySelector(".saint-seiya-prev");

            if (!slides.length) return;


            /* Hide all slides */

            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });


            /* Show first slide */

            slides[0].classList.add("active");


            /* Change slide */

            function changeSlide(direction) {

                slides[index].classList.remove("active");

                index += direction;

                if (index >= slides.length) {
                    index = 0;
                }

                if (index < 0) {
                    index = slides.length - 1;
                }

                slides[index].classList.add("active");

            }


            /* Next button */

            if (next) {

                next.addEventListener("click", function () {

                    changeSlide(1);

                });

            }


            /* Previous button */

            if (prev) {

                prev.addEventListener("click", function () {

                    changeSlide(-1);

                });

            }


            /* Automatic slide - 6 seconds */

            setInterval(function () {

                changeSlide(1);

            }, 6000);

        });

    }


    /* Wait for page */

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", initSaintSeiyaSlider);

    } else {

        initSaintSeiyaSlider();

    }

})();(function () {

    /* Saint Seiya Slider CSS */

    const style = document.createElement("style");

    style.textContent = `
        .saint-seiya-slider {
            position: relative !important;
            width: 70% !important;
            max-width: 700px !important;
            margin: auto !important;
            overflow: hidden !important;
            aspect-ratio: 2 / 3 !important;
        }

        .saint-seiya-slide {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            object-position: top center !important;
            visibility: hidden !important;
        }

        .saint-seiya-slide.active {
            visibility: visible !important;
        }

        .saint-seiya-prev,
        .saint-seiya-next {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 10 !important;

            background: #d4af37 !important;
            color: white !important;

            border: 0 !important;
            padding: 8px 14px !important;
            font-size: 20px !important;
            font-weight: bold !important;
            cursor: pointer !important;
        }

        .saint-seiya-prev {
            left: 10px !important;
        }

        .saint-seiya-next {
            right: 10px !important;
        }

        .saint-seiya-prev:hover,
        .saint-seiya-next:hover {
            opacity: 0.8 !important;
        }
    `;

    document.head.appendChild(style);


    /* Initialize Slider */

    function initSaintSeiyaSlider() {

        document.querySelectorAll(".saint-seiya-slider").forEach(function (slider) {

            if (slider.dataset.sliderReady) return;

            slider.dataset.sliderReady = "true";

            let index = 0;

            let slides = slider.querySelectorAll(".saint-seiya-slide");

            let next = slider.querySelector(".saint-seiya-next");

            let prev = slider.querySelector(".saint-seiya-prev");

            if (!slides.length) return;


            /* Hide all slides */

            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });


            /* Show first slide */

            slides[0].classList.add("active");


            /* Change slide */

            function changeSlide(direction) {

                slides[index].classList.remove("active");

                index += direction;

                if (index >= slides.length) {
                    index = 0;
                }

                if (index < 0) {
                    index = slides.length - 1;
                }

                slides[index].classList.add("active");

            }


            /* Next button */

            if (next) {

                next.addEventListener("click", function () {

                    changeSlide(1);

                });

            }


            /* Previous button */

            if (prev) {

                prev.addEventListener("click", function () {

                    changeSlide(-1);

                });

            }


            /* Automatic slide - 6 seconds */

            setInterval(function () {

                changeSlide(1);

            }, 6000);

        });

    }


    /* Wait for page */

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", initSaintSeiyaSlider);

    } else {

        initSaintSeiyaSlider();

    }

})();
