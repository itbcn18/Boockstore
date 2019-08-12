let books = library.books;

console.log(books);


createGrid(books);

function createGrid() {

    let gridBody = document.getElementById('card');

    for (let i = 0; i < books.length; i++) {

        // Crear elemento padre de las Cards que contendrá los demás elementos y asignarle una clase a los div que la conforman
        let flipCard = document.createElement('div');
        flipCard.className = "flip-card" // Devolverá el valor de la clase contenida como attribute en el elemento "div"

        // Div cuya clase permite el efecto "flip" con css
        let flipCardInner = document.createElement('div');
        flipCardInner.className = "flip-card-inner";

        // Front Card
        let flipCardImg = document.createElement('img');
        flipCardImg.className = "img-fluid";
        flipCardImg.setAttribute('src', books[i].portada);
        flipCardImg.setAttribute('alt', books[i].titulo);

        let flipCardFront = document.createElement('div');
        flipCardFront.className = "flip-card-front";
        flipCardFront.append(flipCardImg); // Dentro de este div se añade el div de la img

        // Back Card
        let flipCardBack = document.createElement('div');
        flipCardBack.className = "flip-card-back";

        let backTitle = document.createElement('h3');
        backTitle.innerHTML = books[i].titulo;
        flipCardBack.innerHTML = books[i].descripcion;

        let backButton = document.createElement('button');
        backButton.className = "btn btn-secondary";
        backButton.innerHTML = "Detalles";
        backButton.setAttribute('href', books[i].portada);
        // Para el Lightbox
        backButton.setAttribute('data-fancybox', books[i].portada);
        backButton.setAttribute('data-caption', books[i].titulo);

        flipCardBack.append(backTitle, backButton);


        flipCardInner.append(flipCardFront, flipCardBack);

        flipCard.append(flipCardInner);

        gridBody.appendChild(flipCard);

    }

}



// Referenciar el input del search
let searchInput = document.getElementById('search-input');
// Añadir Event Listener al input y se le llama una function
searchInput.addEventListener('keyup', filterTitles);

function filterTitles() {

    // Tomar el valor que tenga dentro el input
    let term = document.getElementById('search-input').value.toUpperCase();
    // console.log(term);

    // Tomar los valores de todos los títulos de los libros
    let cards = document.getElementById('card');

    // Tomar todos los "flip-card" contenidos en "cards" (Los colocará en un array a todos esos elementos html y por ende se deberá de loopear ese nuevo array)
    let  flipCards = cards.getElementsByClassName('flip-card'); 
    for (let i = 0; i < flipCards.length; i++) {
       let titles = flipCards[i].getElementsByTagName('h3')[0];

       // Chequear si lo que se ha tipeado posee algún index dentro del título por el cual está pasando el loop.
       // Tomará lo que está dentro del tag "h3" en el HTML
       // Si no existe "match" entre lo que se busca y algún título, se busca esconderlo, si existe "match" se mostrará
       if (titles.innerHTML.toUpperCase().indexOf(term) > -1) {
           flipCards[i].style.display = '';  // flipCards[i] el actual elemento por el que está pasando el loop
       }else {
        flipCards[i].style.display = 'none';
       }
        
    }

}

filterTitles();

