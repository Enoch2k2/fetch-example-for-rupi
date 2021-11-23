const baseUrl = 'https://swapi.dev/api/';


const getUl = () => document.getElementById('list');


const loadCharacters = () => {
  fetch(baseUrl + 'people/')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.results.forEach(person => {
        const li = document.createElement('li');
        li.innerText = person.name;
        getUl().appendChild(li);
      })
    })
}



document.addEventListener('DOMContentLoaded', () => {
  loadCharacters();
})