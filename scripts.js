const convertButton = document.querySelector(".convert-button")
const selectCurrency2 = document.querySelector("#select-currency-2")
const selectCurrency = document.querySelector("#select-currency-1")

function convert(){

const input = document.querySelector(".input-currency")
const currencyToConvert = document.querySelector(".currency-value-to-convert")
const currencyConverted = document.querySelector(".currency-value-converted")


const dolarToday = 5.48 ; // (real)
const euroToday = [6.10 , 1.11] ; //valores(real,dolar)
const bitcoinToday = [329794.18 , 62326.70 , 55633.36 , 47041.50] ; //valores(real,dolar,euro,libra)
const libraToday = [7.22 , 1.32 , 1.19] ; //valores (real,dolar,euro)   

// Conversão de Real para outras moedas

if(selectCurrency.value == "real" && selectCurrency2.value == "dolar"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input.value / dolarToday)
    
}

if(selectCurrency.value == "real" &&  selectCurrency2.value == "euro"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR"
    }).format(input.value / euroToday[0])
    
}

if(selectCurrency.value == "real" &&  selectCurrency2.value == "bitcoin"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(input.value / bitcoinToday[0])
    
}

if(selectCurrency.value == "real" &&  selectCurrency2.value == "libra"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(input.value / libraToday[0])
    
}

// Conversão das demais moedas para Real

if(selectCurrency.value == "dolar" &&  selectCurrency2.value == "real"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency:"BRL"
    }).format(input.value * dolarToday)
}

if(selectCurrency.value == "euro" &&  selectCurrency2.value == "real"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style:"currency",
        currency: "EUR"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency:"BRL"
    }).format(input.value * euroToday[0])
}

if(selectCurrency.value == "bitcoin" &&  selectCurrency2.value == "real"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "BTC"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency:"BRL"
    }).format(input.value * bitcoinToday[0])
}

if(selectCurrency.value == "libra" &&  selectCurrency2.value == "real"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style:"currency",
        currency: "GBP"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency:"BRL"
    }).format(input.value * libraToday[0])
}
   
//Conversão do Dolar para as outras moedas

if(selectCurrency.value == "dolar" &&  selectCurrency2.value == "euro"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR"
    }).format(input.value / euroToday[1])
    
}

if(selectCurrency.value == "dolar" &&  selectCurrency2.value == "bitcoin"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(input.value / bitcoinToday[1])
    
}

if(selectCurrency.value == "dolar" &&  selectCurrency2.value == "libra"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(input.value / libraToday[1])
    
}

// Conversão das demais moedas para dolar

if(selectCurrency.value == "euro" &&  selectCurrency2.value == "dolar"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "USD"
    }).format(input.value * euroToday[1])
    
}

if(selectCurrency.value == "bitcoin" &&  selectCurrency2.value == "dolar"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input.value * bitcoinToday[1])


}

if(selectCurrency.value == "libra" &&  selectCurrency2.value == "dolar"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input.value * libraToday[1])

}

// Conversão de Euro para as outras moedas

if(selectCurrency.value == "euro" &&  selectCurrency2.value == "bitcoin"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(input.value / bitcoinToday[2])
    
}

if(selectCurrency.value == "euro" && selectCurrency2.value == "libra"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency", 
        currency: "EUR"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-GB" , {
        style: "currency" ,
        currency: "GBP"
    }).format(input.value / libraToday[2])
}

// Conversão das demais moedas para Euro

if(selectCurrency.value == "bitcoin" &&  selectCurrency2.value == "euro"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "EUR"
    }).format(input.value * bitcoinToday[2])
    
}

if(selectCurrency.value == "libra" && selectCurrency2.value == "euro"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency", 
        currency: "GBP"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-GB" , {
        style: "currency" ,
        currency: "EUR"
    }).format(input.value * libraToday[2])
}

// Conversão de Libra para as outras moeadas

if(selectCurrency.value == "libra" &&  selectCurrency2.value == "bitcoin"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(input.value / bitcoinToday[3])
    
}

// Conversão das demais moedas para Libra

if(selectCurrency.value == "bitcoin" &&  selectCurrency2.value == "libra"){
    currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(input.value)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(input.value * bitcoinToday[3]) 
}



}

function preventDuplicates() {
    if (selectCurrency.value === selectCurrency2.value) {
        alert("Você não pode escolher a mesma moeda para a conversão!");
    }
}

function changeCurrencyLogo() {
    const logoCurrencyToConvert = document.querySelector("#to-convert-logo")
    const logoCurrencyConverted = document.querySelector("#converted-logo")
    const currency1 = document.querySelector("#currency-1")
    const currency2 = document.querySelector("#currency-2")

    // REAL
    if(selectCurrency.value === "real"){
        logoCurrencyToConvert.src = "./assets/brasil 2.png"
        currency1.innerHTML = "Real"
    }

    if(selectCurrency2.value === "real"){
        logoCurrencyConverted.src = "./assets/brasil 2.png"
        currency2.innerHTML = "Real"
    }

    // DOLAR
    if(selectCurrency.value === "dolar"){
        logoCurrencyToConvert.src = "./assets/estados-unidos.png"
        currency1.innerHTML = "Dolar Americano"
    }

    if(selectCurrency2.value === "dolar"){
        logoCurrencyConverted.src = "./assets/estados-unidos.png"
        currency2.innerHTML = "Dolar Americano"
    }

    // EURO
    if(selectCurrency.value === "euro") {
        logoCurrencyToConvert.src = "./assets/logo-euro.png"
        currency1.innerHTML = "Euro"
    }

    if(selectCurrency2.value === "euro") {
        logoCurrencyConverted.src = "./assets/logo-euro.png"
        currency2.innerHTML = "Euro"
    }

    // LIBRA
    if(selectCurrency.value === "libra"){
        logoCurrencyToConvert.src = "./assets/libra 1.png"
        currency1.innerHTML = "Libra Esterlina"
    }

    if(selectCurrency2.value === "libra"){
        logoCurrencyConverted.src = "./assets/libra 1.png"
        currency2.innerHTML = "Libra Esterlina"
    }

    //BitCoin
    if(selectCurrency.value === "bitcoin"){
        logoCurrencyToConvert.src = "./assets/bitcoin 1.png"
        currency1.innerHTML = "BitCoin"
    }

    if(selectCurrency2.value === "bitcoin"){
        logoCurrencyConverted.src = "./assets/bitcoin 1.png"
    }
    

    convert()
}




selectCurrency.addEventListener("change", preventDuplicates)  
selectCurrency2.addEventListener("change", preventDuplicates)
selectCurrency.addEventListener("change", changeCurrencyLogo)  
selectCurrency2.addEventListener("change", changeCurrencyLogo)
convertButton.addEventListener("click", convert) 

