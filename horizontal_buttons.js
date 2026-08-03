document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".toggle-button").forEach(function(button) {

        button.onclick = function () {

            let target = this.getAttribute("data-target");

            document.querySelectorAll(".toggle-content").forEach(function(content) {
                content.style.display = "none";
            });

            let element = document.getElementById(target);

            if (element) {
                element.style.display =
                    element.style.display === "none" ? "" : "none";
            }

        };

    });

});
