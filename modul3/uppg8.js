// Här har du fått all js kod från genomgången
// Den har självklart andra variabelnamn och annan funktionalitet än vad du behöver
// Använ ddenna fil som utgångspunkt för att lösa uppgiften eller skriv din egen kod

let temperatureSlider = document.getElementById("temperatureSlider");
let selectedTemperatureElement = document.getElementById("selectedTemperature");
let weatherMessageElement = document.getElementById("weatherMessage");

// Initial display of selected temperature
selectedTemperatureElement.innerText = temperatureSlider.value + "°C";

// Initial update of weather message based on the default temperature
updateWeatherMessage(temperatureSlider.value);

// Event listener for slider change
temperatureSlider.addEventListener("input", function() {
    // Update the displayed temperature
    selectedTemperatureElement.innerText = temperatureSlider.value + "°C";

    // Update the weather message based on the selected temperature
    updateWeatherMessage(temperatureSlider.value);
});

// Function to update the weather message
function updateWeatherMessage(temperature) {
    if (temperature > 30) {
        weatherMessageElement.innerText = "It's a hot day!";
        weatherMessageElement.style.color = "red";
    } else if (temperature <= 30 && temperature >= 20) {
        weatherMessageElement.innerText = "The weather is pleasant.";
        weatherMessageElement.style.color = "green";
    } else {
        weatherMessageElement.innerText = "It's a bit chilly.";
        weatherMessageElement.style.color = "blue";
    }
}

let secret = Math.floor(Math.random() * 101);
let slider = document.getElementById("valueSlider");
let output = document.getElementById("selectedNumber");
let hint = document.getElementById("hint");

slider.addEventListener("input", () => {
  let guess = Number(slider.value);
  output.innerText = guess;

  if (guess < secret) {
    hint.innerText = "Talet är större!";
  } else if (guess > secret) {
    hint.innerText = "Talet är mindre!";
  } else {
    hint.innerText = "Du gissade rätt 🎉";
  }
});

