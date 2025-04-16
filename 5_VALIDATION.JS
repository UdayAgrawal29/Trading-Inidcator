document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const terms = document.getElementById("terms");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let valid = true;

        if (fullName.value.trim() === "") {
            alert("Full Name is required");
            valid = false;
        }

        if (!validateEmail(email.value)) {
            alert("Enter a valid email address");
            valid = false;
        }

        if (password.value.length < 6) {
            alert("Password must be at least 6 characters long");
            valid = false;
        }

        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match");
            valid = false;
        }

        if (!terms.checked) {
            alert("You must agree to the Terms and Conditions");
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const monthlyPlan = document.getElementById('monthly');
    const quarterlyPlan = document.getElementById('quarterly');
    const yearlyPlan = document.getElementById('yearly');

    const planDetails = {
        "monthly": { price: "₹499", description: "Ideal for getting started..." },
        "quarterly": { price: "₹799", description: "Enhance your market analysis..." },
        "yearly": { price: "₹1049", description: "Maximize your trading potential..." }
    };

    function updatePricing(plan) {
        document.querySelector('.pricing-card-title').textContent = planDetails[plan].price;
        document.querySelector('.card-body p').textContent = planDetails[plan].description;
    }

    // Add event listeners to pricing buttons
    monthlyPlan.addEventListener("click", () => updatePricing('monthly'));
    quarterlyPlan.addEventListener("click", () => updatePricing('quarterly'));
    yearlyPlan.addEventListener("click", () => updatePricing('yearly'));
});
