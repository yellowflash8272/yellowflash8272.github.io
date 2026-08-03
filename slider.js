document.addEventListener("DOMContentLoaded", function () {

    let bleachIndex = 0;
    let bleachSlides = document.querySelectorAll("#bleach-slider .bleach-slide");

    if (!bleachSlides.length) return;

    function bleachChange(n) {
        bleachSlides[bleachIndex].style.display = "none";

        bleachIndex += n;

        if (bleachIndex >= bleachSlides.length)
            bleachIndex = 0;

        if (bleachIndex < 0)
            bleachIndex = bleachSlides.length - 1;

        bleachSlides[bleachIndex].style.display = "block";
    }

    document.getElementById("bleach-next").onclick = function () {
        bleachChange(1);
    };

    document.getElementById("bleach-prev").onclick = function () {
        bleachChange(-1);
    };

    setInterval(function () {
        bleachChange(1);
    }, 4000);

});
