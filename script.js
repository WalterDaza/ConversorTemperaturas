
function convertirFahrenheit(){
    const celsius = document.getElementById("celsius").value
    const fahrenheit = document.getElementById("fahrenheit")

    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor ingresa un valor numerico en el campo de Celsius.");
        return;
    }

    const resultadoFahrenheit = (parseFloat(celsius) * 9/5) + 32 + " °F"
    fahrenheit.textContent = resultadoFahrenheit

    document.querySelector(".fahrenheit").style.display ="Block"

    document.getElementById("celsius").value = ""
    document.getElementById("kelvin").textContent = ""
    document.querySelector(".kelvin").style.display ="none"
}

function convertirKelvin(){
    const celsius = document.getElementById("celsius").value
    const kelvin = document.getElementById("kelvin")
    const resultadoKelvin = parseFloat(celsius) + 273.15 + " °K"

    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor ingresa un valor numerico en el campo de Celsius.");
        return;
    }

    kelvin.textContent = resultadoKelvin

    document.querySelector(".kelvin").style.display ="Block"
    document.getElementById("celsius").value = ""
    document.getElementById("fahrenheit").textContent = ""
    document.querySelector(".fahrenheit").style.display ="none"

}