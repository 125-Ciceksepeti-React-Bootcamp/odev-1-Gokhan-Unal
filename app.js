const cards = document.querySelector(".card-wrapper")

async function createCard() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const res = await data.json()
  for (let i = 0; i < 10; i++) {
    let html = `
       <div class="card">
        <div class="card__content">
          <img  class="card__image" src="https://picsum.photos/400/300" alt="">
               <div class="card__context">
               <h3 class="card__title">${res[i].title}</h3>
               <p class="card__text">
               ${res[i].body}
               </p>
               <a href="#" class="card__button">Read More</a>
               </div>
          </div>
        </div>
       `;
    cards.innerHTML += html;
  }
}

createCard()