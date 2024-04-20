function convert() {
    let celsius = parseFloat(document.getElementById('inputCelsius').value);

    if (!isNaN(celsius)) {
        let fahrenheitresult = celsius * 1.8 + 32;
        let calculatemethod = celsius + '°C * (9 / 5) + 32 = ' + fahrenheitresult.toFixed(2) + '°F';

        document.getElementById('inputFahrenheit').value = fahrenheitresult.toFixed(2);
        document.getElementById('method').value = calculatemethod;
    } else {
        document.getElementById('inputFahrenheit').value = '';
        document.getElementById('method').value = '';
        alert("Silahkan memasukkan input berupa angka");
    }
}

function reverse() {
    let fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);

    if (!isNaN(fahrenheit)) {
        let celsiusresult = (fahrenheit - 32) * 5 / 9;
        let calculatemethod = fahrenheit + '°F - 32 x 5/9 = ' + celsiusresult.toFixed(2) + '°C';

        document.getElementById('inputCelsius').value = celsiusresult.toFixed(2);
        document.getElementById('method').value = calculatemethod;
    } else {
        document.getElementById('inputCelsius').value = '';
        document.getElementById('method').value = '';
        alert("Silahkan memasukkan input berupa angka");
    }
}
