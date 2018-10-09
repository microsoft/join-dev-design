var request = require("request");

request(example.env.LOCATION_KEY);

// Object to store location information based on user's IP
// elsewhere is the default
let appData = {
  city: "",
  country: "",
  countryname: "elsewhere"
};

// Gets user location, sets the appData object, and renders the user's city onto the page
function getLocation() {
  const key = YOUR_ACCESS_KEY; // @Microsoft, this line needs to be replaced with your API key for IPStack.
  const api = `http://api.ipstack.com/24.52.253.12?access_key=${key}`;

  fetch(api)
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(APIdata => {
      appData.country = APIdata.country_code; // Set the country
      appData.countryname = APIdata.country_name; // Set the country name
      appData.city = APIdata.city; // Set the city
    })
    .then(detectLocation => {
      changeLocation();
    });
}

// Gets the user's location from the appData object and renders it on-screen
function changeLocation() {
  // Check to see that city is not empty, otherwise render user's city on-screen
  let local = document.getElementById("location");
  appData.city == "" ? "" : (local.innerHTML = appData.city);
}

// Run the getLocation function
getLocation();
