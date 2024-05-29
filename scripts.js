function selectPaymentMethod(method) {
    document.getElementById('payment-methods').style.display = 'none';
    document.getElementById('payment-details').style.display = 'block';

    if (method === 'credit-card') {
        document.getElementById('credit-card-form').style.display = 'block';
    } else if (method === 'paypal') {
        document.getElementById('paypal-form').style.display = 'block';
    }
}

function processPayment() {
    // Simulate payment verification
    const paymentSuccessful = Math.random() > 0.5; // 50% chance of success for demo purposes

    if (paymentSuccessful) {
        alert("Payment made successfully. Verification will be sent to your email.");
        document.getElementById('payment-details').style.display = 'none';
        document.getElementById('payment-confirmation').style.display = 'block';
    } else {
        document.getElementById('payment-details').style.display = 'none';
        document.getElementById('payment-error').style.display = 'block';
    }
}

function cancelPayment() {
    alert('Payment Cancelled. Redirecting to home page...');
    // Simulate redirection to the home page
    window.location.href = 'index.html'; // Redirect to home page or origin page
}

function retryPayment() {
    document.getElementById('payment-error').style.display = 'none';
    document.getElementById('payment-details').style.display = 'block';
}
