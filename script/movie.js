function renderOneFilm(film) {
  e;
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

  card.querySelector("#buyticket").addEventListener("click", () => {
    buyTicket(film, card);
  });

  document.querySelector("#films").appendChild(card);
}

document.querySelector(".movie").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/1")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie2").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/2")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie3").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/3")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie4").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/4")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie5").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/5")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie6").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/6")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie7").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/7")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie8").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/8")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie9").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/9")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie10").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/10")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie11").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/11")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie12").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/12")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie13").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/13")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie14").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/14")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});
document.querySelector(".movie15").addEventListener("click", () => {
  fetch("https://movie-theatre-backend.vercel.app/films/15")
    .then((res) => res.json())
    .then((filmData) => {
      const film = filmData;
      const posterUrl = film.poster;
      window.location.href = posterUrl;
    });
});

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

function getAllFilms() {
  fetch("https://movie-theatre-backend.vercel.app/films")
    .then((res) => res.json())
    .then((filmData) => filmData.forEach((film) => renderOneFilm(film)));
}
function initialize() {
  getAllFilms();
}
initialize();
