const converterButton = document.querySelector("#converter-button")
const currencySelect = document.querySelector("#currency-select-converted")
const currencySelectToConvert = document.querySelector("#currency-select-to-convert")
let currencyFlag = document.querySelector("#currency-flag")

function convertValues() {
    let inputValue = document.querySelector("#value").value
    let originalValue = document.querySelector(".original-value") // Valor em Real
    let valueConverted = document.querySelector(".value-converted") // Outras moedas

    const dollarToday = 4.97
    const euroToday = 5.33
    const poundToday = 6.25
    const australlianDollar = 3.23
    const canadianDollar = 3.67


    if(currencySelect.value == "dollar"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue/dollarToday)
        currencyFlag.setAttribute("src", "./assets/USA-flag.png")
    }

    if (currencySelect.value == "euro"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue/euroToday)  
    }

    if (currencySelect.value == "pound"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue/poundToday)   
    }

    if (currencySelect.value == "australlian-dollar"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "AUD"
        }).format(inputValue/australlianDollar)  
    }

    if (currencySelect.value == "canadian-dollar"){
        valueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "CAD"
        }).format(inputValue/canadianDollar)  
    
    }

    originalValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}

function changeFlags() {
    const currencyName = document.getElementById("currency-name")

    if(currencySelect.value == "dollar"){
        currencyName.innerHTML = "American Dollar"
        currencyFlag.setAttribute("src", "./assets/USA-flag.png")
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyFlag.setAttribute("src", "./assets/euro.png")
    }

    if(currencySelect.value == "pound"){
        currencyName.innerHTML = "Pound Esterling"
        currencyFlag.src = "./assets/libra.png"
    }

    if(currencySelect.value == "australlian-dollar"){
        currencyName.innerHTML = "Australlian Dollar"
        currencyFlag.src = "./assets/australlian-flag.jpg"
    }

    if(currencySelect.value == "canadian-dollar"){
        currencyName.innerHTML = "Canadian Dollar"
        currencyFlag.src = "./assets/canadian-flag.png"
    }

    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyFlag.src = "./assets/BR-flag.png"
    }

    convertValues()
}

function changeOriginalFlags(){
    const currencyOriginalName = document.getElementById("currency-original-name")
    const currencyOriginalFlag = document.querySelector("#currency-original-flag")

    if(currencySelectToConvert.value == "dollar"){
        currencyOriginalName.innerHTML = "American Dollar"
        currencyOriginalFlag.setAttribute("src", "./assets/USA-flag.png")
    }

    if(currencySelectToConvert.value == "euro"){
        currencyOriginalName.innerHTML = "Euro"
        currencyOriginalFlag.setAttribute("src", "./assets/euro.png")
    }

    if(currencySelectToConvert.value == "pound"){
        currencyOriginalName.innerHTML = "Pound Esterling"
        currencyOriginalFlag.src = "./assets/libra.png"
    }

    if(currencySelectToConvert.value == "australlian-dollar"){
        currencyOriginalName.innerHTML = "Australlian Dollar"
        currencyOriginalFlag.src = "./assets/australlian-flag.jpg"
    }

    if(currencySelectToConvert.value == "canadian-dollar"){
        currencyOriginalName.innerHTML = "Canadian Dollar"
        currencyOriginalFlag.src = "./assets/canadian-flag.png"
    }
}

currencySelectToConvert.addEventListener('change', changeOriginalFlags)
currencySelect.addEventListener('change', changeFlags)
converterButton.addEventListener('click', convertValues)

