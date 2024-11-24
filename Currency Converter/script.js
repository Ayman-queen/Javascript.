const currency={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.75,
    PKR:280
}
 const formElement = document.getElementById('converter-form');
 formElement?.addEventListener('submit', function(e){
    e.preventDefault();

    let fromCurrency = document.getElementById('from').value
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value;

    // let amount = parseFloat((document.getElementById('from') .value  || '0') as string);

    // let amount = parseFloat(fromCurrency);
    let fromAmount = currency[fromCurrency];
    let toAmount = currency[toCurrency];
    let baseAmount = amount / fromAmount;
    let convertedAmount=baseAmount * toAmount;

    const resultElement = document.getElementById('result');
    if (resultElement){
        resultElement.textContent = `converted Amount :${Math.round(convertedAmount)}`;
    }
})

// document.getElementById('Converter-form')?.addEventListener('submit', function(e){
//     e.preventDefault();