// const button = document.getElementById("fortuneButton");
// const reading = document.getElementById("fortuneReading");

// const url = "https://eightballapi.com/api";

// button.addEventListener("click", async () => {
//     const response = await fetch('https://cors-anywhere.herokuapp.com/' + url);

//     const data = await response.json();

//     reading.innerText = data.reading;
// });
// Select elements 
const askButton = document.getElementById('ask-button');
const fortuneEl = document.getElementById('fortune');

// API URL
const apiUrl = 'https://eightballapi.com/api';  

// Event listener for ask button
askButton.addEventListener('click', async () => {

  // Fetch fortune from API
  try {
    const response = await fetch('https://cors-anywhere.herokuapp.com/' + apiUrl);
    const data = await response.json();

    // Display fortune text
    fortuneEl.innerText = data.reading;

  } catch (error) {
    console.error(error);
    fortuneEl.innerText = 'Error fetching fortune'; 
  }

});
