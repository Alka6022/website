document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded!");

    // JS feature 1: Welcome alert
    alert("Welcome to Lochquarry Outdoor Centre!");

    // JS feature 2: Back to Top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = "Back to Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.display = "none"; // Initially hidden
    backToTopButton.style.padding = "10px";
    backToTopButton.style.backgroundColor = "#0073e6";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.cursor = "pointer";
    document.body.appendChild(backToTopButton);

    // Show the button when the user scrolls down
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll back to the top when the button is clicked
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
