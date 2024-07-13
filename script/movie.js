function renderOneFilm(film) {
  //Build a movie
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
    <img src="${film.poster}">
    <div class="content">
    <h4 id="title"> ${film.title} </h4>
    
    <p id="capacity">Capacity: ${film.capacity} </p>
    
    
    <p id="showtime"> ShowTime:${film.showtime}</p>
    
    
    <p id="tickets">Available Tickets:${film.tickets_sold}</p>
   
    <p id="desc">${film.description}</p>
    <button id="buyticket">Buy Ticket</button>
    </div>

    `;

  //Add event listener to buy ticket button
  card.querySelector("#buyticket").addEventListener("click", () => {
    buyTicket(film, card);
  });

  //add animal card to dom
  document.querySelector("#film-list").appendChild(card);
}

document.querySelector(".movie").addEventListener("click", () => {
  fetch("http://localhost:3000/films/1")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});

function buyTicket(film, card) {
  const ticketsElements = card.querySelector("#tickets");
  let availableTickets = film.capacity - film.tickets_sold;
  if (availableTickets > 0) {
    availableTickets -= 1;
    film.tickets_sold += 1;
    ticketsElements.textContent = `Available Tickets:${availableTickets}`;
  } else {
    alert("Sorry, this show is sold out!");
  }
}
//fetching
function getAllFilms() {
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((filmData) => filmData.forEach((film) => renderOneFilm(film)));
}
function initialize() {
  getAllFilms();
}
initialize();
