const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const currency = currencyValues.find(c => c.currency === exchangeCurrency);
    return currency ? sumUAH / currency.value : null;
};
console.log(
    exchange(
        10000,
        [
            { currency: 'USD', value: 40 },
            { currency: 'EUR', value: 42 }
        ],
        'USD'
    )
);