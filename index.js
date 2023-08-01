function tempcalc(event) {
    event.preventDefault();
    const temperature = parseFloat(document.getElementById('temp').value);
    const select = document.getElementById('select');
    const selectOption = select.options[select.selectedIndex].value;
    console.log(selectOption);
    let result;

    if (selectOption == 'celcius') {
        result = calTofar(temperature);
        document.querySelector('.result').innerHTML = `${result}° Fahrenheit`;
    } else {
        result = fartoCal(temperature);
        document.querySelector('.result').innerHTML = `${result}° Celsius`;
    }

    function calTofar(temperature) {
        const Fahrenheit = (9 / 5) * temperature + 32;
        console.log("Fahrenheit", Fahrenheit);
        return Fahrenheit;
    }

    function fartoCal(temperature) {
        const Celsius = (5 / 9) * (temperature - 32);
        console.log("Celsius", Celsius);
        return Celsius;
    }
}
