const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d0bf8bf61amsh4942a944413ecabp133b60jsn6d26df1df011",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
