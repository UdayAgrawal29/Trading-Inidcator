document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".w-100.btn.btn-lg.btn-primary");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "6_pay.html";
        });
    });
    document.getElementById("see_price").addEventListener("click", function() {
        document.getElementById("price_con").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("pri").addEventListener("click", function() {
        document.getElementById("price_con").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("third-part-btn").addEventListener("click", function() {
        document.getElementById("price_con").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("indi").addEventListener("click", function() {
        document.getElementById("part_four").scrollIntoView({ behavior: "smooth" });
    });
});
