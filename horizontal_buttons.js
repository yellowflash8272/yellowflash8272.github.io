document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".toggle-button").forEach(function(button) {

        button.onclick = function () {

            let target = document.getElementById(this.getAttribute("data-target"));

            // Was this section already open?
            let wasOpen = target && target.style.display !== "none";

            // Hide all sections
            document.querySelectorAll(".toggle-content").forEach(function(content) {
                content.style.display = "none";
            });

            // If it wasn't already open, show it
            if (target && !wasOpen) {
                target.style.display = "";
            }

        };

    });

});
