document.addEventListener('DOMContentLoaded', function() {
    const planOptions = document.querySelectorAll('.plan-option');
    const selectedPlanCard = document.getElementById('selected-plan-card');
    const valueTag = document.getElementById('value-tag');
    const planCost = document.getElementById('plan-cost');
    const taxAmount = document.getElementById('tax-amount');
    const totalAmount = document.getElementById('total-amount');
    const payButton = document.getElementById('pay-now-btn');
    const promoInput = document.getElementById('promo-input');
    const applyPromoBtn = document.getElementById('apply-promo');
    const paymentMethods = document.querySelectorAll('.method');
    const cardForm = document.getElementById('card-payment-form');
    const upiForm = document.getElementById('upi-payment-form');
    const netBankingForm = document.getElementById('netbanking-payment-form');

    // Plans object to store prices
    const plans = {
        monthly: { price: 499, display: 'Monthly' },
        quarterly: { price: 799, display: 'Quarterly' },
        yearly: { price: 1049, display: 'Yearly' }
    };

    let currentPlan = { ...plans.monthly }; // Default plan
    let originalPrice = currentPlan.price;
    let promoApplied = false;

    function updateAmounts() {
        const price = currentPlan.price;
        const tax = price * 0.18;
        const total = price + tax;

        planCost.textContent = `₹${price}`;
        taxAmount.textContent = `₹${tax.toFixed(2)}`;
        totalAmount.textContent = `₹${total.toFixed(2)}`;
        payButton.textContent = `Pay ₹${total.toFixed(2)}`;
    }

    function updateSelectedPlan() {
        const planTitle = document.querySelector('#selected-plan-card .plan-name h3');
        const planPriceElement = document.querySelector('#selected-plan-card .plan-price h2'); 
    
        planTitle.textContent = currentPlan.display;
        planPriceElement.innerHTML = `₹${currentPlan.price}<span>/${currentPlan.name === 'yearly' ? 'yr' : 'mo'}</span>`; 
    
        valueTag.style.display = currentPlan.name === 'yearly' ? 'inline-block' : 'none';
    
        selectedPlanCard.style.backgroundColor = currentPlan.name === 'yearly' ? '#4CAF50' :
            currentPlan.name === 'quarterly' ? '#3888ff' : '#227cff';
    }

    planOptions.forEach(option => {
        option.addEventListener('click', function() {
            planOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            const planName = this.dataset.plan;
            currentPlan = { ...plans[planName], name: planName };
            originalPrice = currentPlan.price;
            promoApplied = false;

            updateSelectedPlan();
            updateAmounts();
        });
    });

    applyPromoBtn.addEventListener('click', function() {
        const promoCode = promoInput.value.trim().toUpperCase();
        if (!promoCode) {
            alert('Please enter a promo code');
            return;
        }

        if (!promoApplied) originalPrice = currentPlan.price;

        if (promoCode === 'SAVE10') {
            currentPlan.price = Math.round(originalPrice * 0.9);
            promoApplied = true;
            alert('Promo code applied! 10% discount');
        } else if (promoCode === 'SAVE20') {
            currentPlan.price = Math.round(originalPrice * 0.8);
            promoApplied = true;
            alert('Promo code applied! 20% discount');
        } else {
            alert('Invalid promo code');
            if (promoApplied) {
                currentPlan.price = originalPrice;
                promoApplied = false;
            }
        }
        updateAmounts();
    });

    // Handle Payment Method Selection
    function showPaymentForm(method) {
        cardForm.style.display = method === 'card' ? 'block' : 'none';
        upiForm.style.display = method === 'upi' ? 'block' : 'none';
        netBankingForm.style.display = method === 'netbanking' ? 'block' : 'none';
    }

    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');

            if (this.id === 'card-method') {
                showPaymentForm('card');
            } else if (this.id === 'upi-method') {
                showPaymentForm('upi');
            } else if (this.id === 'netbanking-method') {
                showPaymentForm('netbanking');
            }
        });
    });

    updateSelectedPlan();
    updateAmounts();
});
