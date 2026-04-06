const ul = document.querySelector('.ul')

fetch('https://api.api-ninjas.com/v1/jokes', {
  headers: {
    'X-Api-Key': 'GnxpyjjORxM1tGWnAHb104SzKiIG8McqnS7opIpX'
  }
})
.then(response => response.json())
.then(data => {
  data.forEach(item => {
   ul.innerHTML += 
   `
    <li class="list">
        <h3 class="quote">${item.joke}</h3>
        <p class="author">${item.rating}</p>
        <hr>
        <div class="type">
        </div>
    </li>
   `
  });
});