const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
const toggleBackdrop = () => backdrop.classList.toggle('visible')



const movies = [];


function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

function closeMovieDeletionModal() {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

function deleteMovieHandler(movieId) {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
  updateUI();
};

function startDeleteMovieHandler(movieId) {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');    
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

function renderNewMovieElement(id, title, imageUrl, rating) {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};




function showMovieModal() { // UI test
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

function clearMovieInput() {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
}

const closeMovieModal = () => addMovieModal.classList.remove('visible')

function cancelAddMovieHandler() {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
}

function addMovieHandler() {
  const movie_fields = {
    titleValue: userInputs[0].value,
    imageUrlValue: userInputs[1].value,
    ratingValue: userInputs[2].value
  }
  validate(movie_fields)
}

function anyEmptyFields(titleValue, imageUrlValue, ratingValue) {
  [titleValue, imageUrlValue, ratingValue].some( movie_field => Boolean(movie_field.trim()) )
} 

const isBetweenOneAndFive = (ratingValue) => Number(ratingValue) < 1 || Number(ratingValue) > 5

function validate({titleValue, imageUrlValue, ratingValue}) {
  if ( anyEmptyFields(titleValue, imageUrlValue, ratingValue) || isBetweenOneAndFive(ratingValue) ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  } else {
    ratingValidator(titleValue, imageUrlValue, ratingValue)
  }
}

function ratingValidator({titleValue, imageUrlValue, ratingValue}) {
  console.log('called')
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
  postMovie(newMovie)
}

function postMovie(newMovie) {
  movies.push(newMovie);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI()
}

function backdropClickHandler() {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
}

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);



/*  POLYMORPHISM SEEMS TOO HEAVY FOR EACH PEICE OF FUNCTIONALITY

const addMovieHandler = () => {
  const movie_fields = {
    titleValue: userInputs[0].value,
    imageUrlValue: userInputs[1].value,
    ratingValue: userInputs[2].value
  }
  ratingValidator(movie_fields, Title, Url, Rating)
};

class RatingValidator {
  constructor(fields, ...collaborators){
    this.titleValue = fields.titleValue
    this.imageUrlValue = fields.imageUrlValue
    this.ratingValue = fields.ratingValue
  }
  create(){
    collaborators.each( collaborator.createReview(this))
  }
}

class Title {
  static createReview(movie) {
    Boolean(movie.titleValue)
  }
}

class Url {
  static createReview() {
    Boolean(movie.titleValue)
  }
}

class Rating {
  static createReview() {}
}

*/