// Get references to HTML elements
const temperatureInput = document.getElementById("temperature");
const fromScaleSelect = document.getElementById("fromScale");
const toScaleSelect = document.getElementById("toScale");
const convertButton = document.getElementById("convertBtn");
const resultDisplay = document.getElementById("result");
const historyList = document.getElementById("history");

// Define an array to store conversion history
const conversionHistory = [];

// Define a function to convert temperature
function convertTemperature() {
    const fromScale = fromScaleSelect.value;
    const toScale = toScaleSelect.value;
    const temperature = parseFloat(temperatureInput.value);

    let convertedTemperature;

    // Perform the temperature conversion logic here
    if (fromScale === "celsius" && toScale === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
    } else if (fromScale === "fahrenheit" && toScale === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
    } else {
        // Handle other conversions as needed
    }

    // Display the result
    const resultText = `${temperature} ${fromScale} is ${convertedTemperature.toFixed(2)} ${toScale}`;
    resultDisplay.textContent = `Result: ${resultText}`;

    // Add the conversion to history
    conversionHistory.push(resultText);
    updateHistory();
}

// Update the history list
function updateHistory() {
    historyList.innerHTML = "";
    conversionHistory.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        historyList.appendChild(listItem);
    });
}

// Add a click event listener to the "Convert" button
convertButton.addEventListener("click", convertTemperature);
