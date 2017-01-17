const conversionRates = {
    USD: { EUR: 0.85, GBP: 0.75 },
    EUR: { USD: 1.18, GBP: 0.88 },
    GBP: { USD: 1.33, EUR: 1.14 }
};

document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Same currency: ${amount} ${fromCurrency}`;
        return;
    }

    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});

function convertCurrency(amount, fromCurrency, toCurrency) {
    const rate = conversionRates[fromCurrency][toCurrency];
    return amount * rate;
}
