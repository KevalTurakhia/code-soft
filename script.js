document.addEventListener("DOMContentLoaded", function() {
    const getStartedBtn = document.getElementById("getStartedBtn");

    getStartedBtn.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Button clicked! You can add your custom action here.");
        // You can add your custom action here, such as showing a modal, navigating to another page, etc.
    });
});
