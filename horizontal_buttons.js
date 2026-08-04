document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".toggle-button").forEach(function (button) {

        button.addEventListener("click", function () {

            const target = document.getElementById(this.dataset.target);

            // Was the clicked section already open?
            const wasOpen = target.style.display === "block";

            // Close all sections
            document.querySelectorAll(".toggle-content").forEach(function (content) {
                content.style.display = "none";
            });

            // If it wasn't open, open it.
            if (!wasOpen) {
                target.style.display = "block";
            }

        });

    });

});
