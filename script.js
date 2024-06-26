document.getElementById('exchangeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    let exchangeRate;

    // Exchange rates
    const rates = {
        USD: { ILS: 3.75, JOD: 3.75 / 5 },
        ILS: { USD: 1 / 3.75, JOD: 1 / 5 },
        JOD: { ILS: 5, USD: 5 / 3.75 }
    };

    if (fromCurrency === toCurrency) {
        exchangeRate = 1;
    } else {
        exchangeRate = rates[fromCurrency][toCurrency];
    }

    const convertedAmount = amount * exchangeRate;

    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});

