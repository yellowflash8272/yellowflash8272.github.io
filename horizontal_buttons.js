document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".toggle-button").forEach(function(button) {

        button.onclick = function () {

            let target = this.getAttribute("data-target");
            let element = document.getElementById(target);

            document.querySelectorAll(".toggle-content").forEach(function(content) {
                if (content.id !== target) {
                    content.style.display = "none";
                }
            });

            if (element) {
                if (window.getComputedStyle(element).display === "none") {
                    element.style.display = "";
                } else {
                    element.style.display = "none";
                }
            }

        };

    });

});
