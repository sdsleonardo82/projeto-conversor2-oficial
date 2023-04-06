const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const convertvalues = async () => {
    const inputreais = document.getElementById('input-real').value
    const realvaluetext = document.getElementById('real-value-text')
    const currencyvaluetext = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())

    const dolar = data.USDBRL.high
    const Euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    

    realvaluetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputreais)

    if (select.value === "US$ Dólar americano") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputreais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputreais / Euro)
    }

    if (select.value === "₿ bitcoin") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(inputreais / bitcoin)
    }

}


changecurrency = () => {
    const currencyname = document.getElementById("currency-name")
    const currencyimg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        currencyname.innerHTML = "Dólar americano"
        currencyimg.src = "./img/USA.png"
    }

    if (select.value === '€ Euro') {
        currencyname.innerHTML = "Euro"
        currencyimg.src = "./img/Euro.png"
    }

    if (select.value === '₿ bitcoin') {
        currencyname.innerHTML = "bitcoin"
        currencyimg.src = "./img/bittcoin.png"
    }
    convertvalues()
}

button.addEventListener('click', convertvalues)
select.addEventListener("change", changecurrency)