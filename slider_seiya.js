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
            display: none;
        }

        .saint-seiya-prev,
        .saint-seiya-next {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 10 !important;
            background: #f17923 !important;
            color: white !important;
            border: 0 !important;
            padding: 8px 14px !important;
            font-size: 20px !important;
            cursor: pointer !important;
        }

        .saint-seiya-prev {
            left: 10px !important;
        }

        .saint-seiya-next {
            right: 10px !important;
        }
    `;

    document.head.appendChild(style);


    /* Saint Seiya Slider */

    function initSaintSeiyaSlider() {

        document.querySelectorAll(".saint-seiya-slider").forEach(function (slider) {

            if (slider.dataset.sliderReady) return;
            slider.dataset.sliderReady = "true";

            let index = 0;

            let slides = slider.querySelectorAll(".saint-seiya-slide");

            let next = slider.querySelector(".saint-seiya-next");

            let prev = slider.querySelector(".saint-seiya-prev");

            if (!slides.length) return;


            /* Show first image */

            slides.forEach(function (slide, i) {

                slide.style.display = i === 0 ? "block" : "none";

            });


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


            /* Next button */

            if (next) {

                next.onclick = function () {

                    changeSlide(1);

                };

            }


            /* Previous button */

            if (prev) {

                prev.onclick = function () {

                    changeSlide(-1);

                };

            }


            /* Automatic slide change - 6 seconds */

            setInterval(function () {

                changeSlide(1);

            }, 6000);

        });

    }


    /* Start slider when page is ready */

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", initSaintSeiyaSlider);

    } else {

        initSaintSeiyaSlider();

    }

})();
