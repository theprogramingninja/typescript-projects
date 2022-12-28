/** @format */
const requestOptions = {
    method: "GET",
    headers: {
        apikey: "B2PozmScL3t41eUnLVbdG1eAY1tQhuEF",
        "Content-Type": "application/json",
    },
};
export async function getApi(url) {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    // console.log(data.symbols);
    const keys = Object.keys(data.symbols);
    return keys;
}
export async function getRateConverter(to, from, amount) {
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);
    const data = await response.json();
    return data;
}
