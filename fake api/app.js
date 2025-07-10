var getDiv = document.getElementById("main");

fetch(`https://fakestoreapi.com/products`)
  .then(data => data.json())
  .then(data => { 
    data.map((value, index) => {
      getDiv.innerHTML += `
        <div class="card" style="width: 18rem; margin: 10px;">
          <img src="${value.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${value.title}</h5>
            <p class="card-text">${value.description}</p>
            <p class="card-text"><strong>$${value.price}</strong></p>
          </div>
        </div>
      `;
      
    });
  });