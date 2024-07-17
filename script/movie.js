function renderOneFilm(film) {
  //Building the films card
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

  //Adding event listener to the buy tickets button
  card.querySelector("#buyticket").addEventListener("click", () => {
    buyTicket(film, card);
  });

  
  document.querySelector("#films").appendChild(card);
  let menu = document.querySelector("#menuList");
  movielist = document.createElement("li");

  movielist.innerHTML = `${film.title}<br><button id="menubtn">Details</button>`;
  let menubtn = movielist.querySelector("#menubtn");

  menu.append(movielist);
  menubtn.addEventListener("click", () => {
    window.location.href = film.poster;
  });
}

function buyTicket(film, card) {
  const ticketsAvailable = card.querySelector("#tickets");
  let availableTickets = film.capacity - film.tickets_sold;
  if (availableTickets > 0) {
    availableTickets -= 1;
    film.tickets_sold += 1;
    ticketsAvailable.textContent = `Available Tickets:${availableTickets}`;
  } else {
    alert("Sorry, this show is sold out!");
  }
}
//fetching all the films and details
function getAllFilms() {
  fetch("https://movie-theatre-backend.vercel.app/films")
    .then((res) => res.json())
    .then((filmData) => filmData.forEach((film) => renderOneFilm(film)));
}
function initialize() {
  getAllFilms();
}
initialize();
