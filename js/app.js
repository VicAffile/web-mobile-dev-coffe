const conteneur = document.querySelector("#conteneur");
const cafes = [
  {
    name: "Perspiciatis",
    image: "images/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "images/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "images/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "images/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "images/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "images/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "images/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "images/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "images/coffee9.jpg"
  }
];

const affichcerCafes = () => {
    for (let cafe of cafes) {
        conteneur.innerHTML += `
        <div class="carte">
          <img class="carte-image" src=./${cafe.image} />
          <h1 class="carte-nom">${cafe.name}</h1>
          <a class="carte-lien" href="#">Taste</a>
        </div>
        `
    }
  };
  
  document.addEventListener("DOMContentLoaded", affichcerCafes);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }