async function getRate() {
    let response = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR")
    let data = await response.json()
    console.log(data.rates.INR)
}

getRate()