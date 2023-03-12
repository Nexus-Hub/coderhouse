const API_KEY = '326aa176990b406a8cf17b41b23450c9';
const API_URL_EXCHANGE_RATES = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

export default async function convertFiatToFiat (amount, fromCurrency, toCurrency) {
    try {
        const response = await fetch(API_URL_EXCHANGE_RATES);
        const data = await response.json();
        const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
        const convertedAmount = amount * exchangeRate;
        return convertedAmount        
    } catch (error) {
        console.error(error);
    }
};



