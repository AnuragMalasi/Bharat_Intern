function convert() {
  const celsius = document.getElementById("celsius");
  const kelvin = document.getElementById("kelvinOutput");
  const fahrenheit = document.getElementById("fahrenheitOutput");
  const celsius_1 = parseFloat(celsius.value);
  if (!isNaN(celsius_1)){
    const kelvin_1 = celsius_1 + 273.15;
    const fahrenheit_1 = (celsius_1 * 9/5) + 32;
    kelvin.textContent = kelvin_1.toFixed(2);
    fahrenheit.textContent = fahrenheit_1.toFixed(2);
  } 
  else {
    kelvin.textContent = "";
    fahrenheit.textContent = "";
  }
}
