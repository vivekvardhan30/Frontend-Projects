/*document.getElementById('mortgageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const term = parseInt(document.getElementById('term').value) * 12;

    const monthlyRepayments = document.getElementById('monthlyRepayments');
    const totalRepayment = document.getElementById('totalRepayment');

    if (principal && interestRate && term) {
        const x = Math.pow(1 + interestRate, term);
        const monthly = (principal * x * interestRate) / (x - 1);
        const total = monthly * term;

        monthlyRepayments.textContent = `£${monthly.toFixed(2)}`;
        totalRepayment.textContent = `£${total.toFixed(2)}`;
    } else {
        monthlyRepayments.textContent = '£0.00';
        totalRepayment.textContent = '£0.00';
    }
});*/

/*document.getElementById('mortgageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const term = parseInt(document.getElementById('term').value) * 12;

    const monthlyRepayments = document.getElementById('monthlyRepayments');
    const totalRepayment = document.getElementById('totalRepayment');
    const resultsSection = document.getElementById('results');

    if (principal && interestRate && term) {
        const x = Math.pow(1 + interestRate, term);
        const monthly = (principal * x * interestRate) / (x - 1);
        const total = monthly * term;

        monthlyRepayments.textContent = `£${monthly.toFixed(2)}`;
        totalRepayment.textContent = `£${total.toFixed(2)}`;
        
        resultsSection.classList.add('visible');
    } else {
        monthlyRepayments.textContent = '£0.00';
        totalRepayment.textContent = '£0.00';
        
        resultsSection.classList.remove('visible');
    }
});*/


document.getElementById('mortgageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const term = parseInt(document.getElementById('term').value) * 12;

    const monthlyRepayments = document.getElementById('monthlyRepayments');
    const totalRepayment = document.getElementById('totalRepayment');
    const resultsSection = document.getElementById('resultAfter');
    const initialSection = document.getElementById('resultBefore');

    if (principal && interestRate && term) {
        const x = Math.pow(1 + interestRate, term);
        const monthly = (principal * x * interestRate) / (x - 1);
        const total = monthly * term;

        monthlyRepayments.textContent = `£${monthly.toFixed(2)}`;
        totalRepayment.textContent = `£${total.toFixed(2)}`;
        
        initialSection.classList.remove('visible');
        resultsSection.classList.add('visible');
    } else {
        monthlyRepayments.textContent = '£0.00';
        totalRepayment.textContent = '£0.00';
        
        resultsSection.classList.remove('visible');
    }
});

  

