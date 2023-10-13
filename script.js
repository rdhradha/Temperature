

while true:
{ 
  const tCelsius = parseFloat(prompt("Enter a temperature in Celsius: "));

function temperature() {
  let tFahrenheit = (tCelsius * 9/5) + 32;
  let tKelvin = tCelsius + 273.15;

  return "The temperature is: " + tFahrenheit + " degrees Fahrenheit and " + tKelvin + " degrees Kelvin";
}

alert(temperature());
}
