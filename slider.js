document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".anime-slider");

    if (!slider) {
        alert("SLIDER NOT FOUND");
        return;
    }

    const slides = slider.querySelectorAll(".anime-slide");
    const next = slider.querySelector(".slider-next");
    const prev = slider.querySelector(".slider-prev");

    alert(
        "Slider found: " + slides.length +
        "\nNext button: " + !!next +
        "\nPrevious button: " + !!prev
    );

});
