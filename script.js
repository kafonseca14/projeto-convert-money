const converterButton = document.querySelector("#converter-button")
const currencySelect = document.querySelector("#currency-select-converted")
const currencySelectToConvert = document.querySelector("#currency-select-to-convert")
let currencyFlag = document.querySelector("#currency-flag")

function convertValues() {
    let inputValue = document.querySelector("#value").value
    let originalValue = document.querySelector(".original-value") // Valor em Real
    let valueConverted = document.querySelector(".value-converted") // Outras moedas

    const dollarToday = 4.97
    const euroToday = 5.35
    const poundToday = 6.25
    const australlianDollar = 3.24
    const canadianDollar = 3.67


    if (currencySelectToConvert.value == "real") {
        originalValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        if (currencySelect.value == "dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue / dollarToday)
        } else if (currencySelect.value == "euro") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue / euroToday)
        } else if (currencySelect.value == "pound") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue / poundToday)
        } else if (currencySelect.value == "australlian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD"
            }).format(inputValue / australlianDollar)
        } else if (currencySelect.value == "canadian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD"
            }).format(inputValue / canadianDollar)
        } else if (currencySelect.value == "real") {
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue)
        }
    }

    if (currencySelectToConvert.value == "dollar") {
        originalValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
        
        if (currencySelect.value == "real") {
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue * dollarToday)
        } else if (currencySelect.value == "euro") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue * 0.93)
        } else if (currencySelect.value == "pound") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue * 0.79)
        } else if (currencySelect.value == "australlian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD"
            }).format(inputValue * 1.53)
        } else if (currencySelect.value == "canadian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD"
            }).format(inputValue * 1.35)
        } else if (currencySelect.value == "dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue)
        }
    }

    if (currencySelectToConvert.value == "euro") {
        originalValue.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        if (currencySelect.value == "real") {
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue * euroToday)
        } else if (currencySelect.value == "dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue * 1.08)  
        } else if (currencySelect.value == "pound") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue * 0.86)
        } else if (currencySelect.value == "australlian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en0-AU", {
                style: "currency",
                currency: "AUD"
            }).format(inputValue * 1.65)
        } else if (currencySelect.value == "canadian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD"
            }).format(inputValue * 1.45)
        } else if (currencySelect.value == "euro") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue)
        }
    }

    if (currencySelectToConvert.value == "pound") {
        originalValue.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        
        if (currencySelect.value == "real") {
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue * poundToday)
        } else if (currencySelect.value == "dollar"){
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue * 1.26)
        } else if (currencySelect.value == "euro"){
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue * 1.17)
        } else if (currencySelect.value == "australlian-dollar"){
            valueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD"
            }).format(inputValue * 1.93)
        } else if (currencySelect.value == "canadian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue * 1.70)
        } else if (currencySelect.value == "pound") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue)
        }
    }

    if (currencySelectToConvert.value == "australlian-dollar") {
        originalValue.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputValue)

        if (currencySelect.value == "real"){
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue * australlianDollar)
        } else if (currencySelect.value == "dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue * 0.65)
        } else if (currencySelect.value = "euro") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue * 0.61)
        } else if (currencySelect.value == "pound") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue * 0.52)
        } else if (currencySelect.value == "canadian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD"
            }).format(inputValue * 0.88)
        } else if (currencySelect.value == "australlian-dollar"){
            valueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD"
            }).format(inputValue)
        }
    }

    if (currencySelectToConvert.value == "canadian-dollar") {
        originalValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "CAD"
        }).format(inputValue)

        if (currencySelect.value == "real"){
            valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputValue * canadianDollar)
        } else if (currencySelect.value == "dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputValue * 0.74)
        } else if (currencySelect.value = "euro") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "EUR"
            }).format(inputValue * 0.69)
        } else if (currencySelect.value == "pound") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue * 0.59)
        } else if (currencySelect.value == "canadian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD"
            }).format(inputValue)
        } else if (currencySelect.value == "canadian-dollar") {
            valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "CAD"
            }).format(inputValue)
        }
    }
}    

function changeFlags() {
    const currencyName = document.getElementById("currency-name")

    if (currencySelect.value == "dollar") {
        currencyName.innerHTML = "American Dollar"
        currencyFlag.setAttribute("src", "./assets/USA-flag.png")
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyFlag.setAttribute("src", "./assets/euro.png")
    }

    if (currencySelect.value == "pound") {
        currencyName.innerHTML = "Pound Esterling"
        currencyFlag.src = "./assets/libra.png"
    }

    if (currencySelect.value == "australlian-dollar") {
        currencyName.innerHTML = "Australlian Dollar"
        currencyFlag.src = "./assets/australlian-flag.jpg"
    }

    if (currencySelect.value == "canadian-dollar") {
        currencyName.innerHTML = "Canadian Dollar"
        currencyFlag.src = "./assets/canadian-flag.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyFlag.src = "./assets/BR-flag.png"
    }

    convertValues()
}

function changeOriginalFlags() {
    const currencyOriginalName = document.getElementById("currency-original-name")
    const currencyOriginalFlag = document.querySelector("#currency-original-flag")

    if (currencySelectToConvert.value == "real") {
        currencyOriginalName.innerHTML = "Real"
        currencyOriginalFlag.setAttribute("src", "./assets/BR-flag.png")
    }

    if (currencySelectToConvert.value == "dollar") {
        currencyOriginalName.innerHTML = "American Dollar"
        currencyOriginalFlag.setAttribute("src", "./assets/USA-flag.png")
    }

    if (currencySelectToConvert.value == "euro") {
        currencyOriginalName.innerHTML = "Euro"
        currencyOriginalFlag.setAttribute("src", "./assets/euro.png")
    }

    if (currencySelectToConvert.value == "pound") {
        currencyOriginalName.innerHTML = "Pound Esterling"
        currencyOriginalFlag.src = "./assets/libra.png"
    }

    if (currencySelectToConvert.value == "australlian-dollar") {
        currencyOriginalName.innerHTML = "Australlian Dollar"
        currencyOriginalFlag.src = "./assets/australlian-flag.jpg"
    }

    if (currencySelectToConvert.value == "canadian-dollar") {
        currencyOriginalName.innerHTML = "Canadian Dollar"
        currencyOriginalFlag.src = "./assets/canadian-flag.png"
    }

    convertValues()
}

currencySelectToConvert.addEventListener('change', changeOriginalFlags)
currencySelect.addEventListener('change', changeFlags)
converterButton.addEventListener('click', convertValues)