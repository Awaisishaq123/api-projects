let getDiv = document.getElementById("container");

function getSearch() {
  const apiKeys = "2b719005043e8c572c412eb051a0372a";
  let getInput = document.getElementById("input");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${getInput.value}&appid=${apiKeys}&units=metric`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      getDiv.innerHTML = `
        <div class="card mt-3  d-flex justify-content around" style="width: 18rem;">
          <img src="https://i.pinimg.com/originals/bd/72/d1/bd72d10c741dde2ce2684577ffa0d86f.gif" class="card-img-top" alt="Weather Image">
          <div class="card-body text-center">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Temperature: ${data.main.temp} °C</p>
            <p class="card-text">feel_like: ${data.main.feel_like} °C</p>
            <p class="card-text">Humidity: ${data.main.Humidity} °C</p>

            <p class="card-text">Weather: ${data.weather[0].description}</p>
            
          </div>
        </div>`;
    })
    .catch((err) => {
      console.log(err);
      getDiv.innerHTML = `<p class="text-danger mt-3">City not found. Please try again.</p>`;
    });

  getInput.value = ""; // fix input clearing
}
