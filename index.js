let myLibrary = [{title: "first book", "pages": 45}, {title: "second book", "pages": 12}, {title: "third book", "pages": 102}];

function Book() {
  
}

function addBookToLibrary() {
  
}

let mainContainer = document.querySelector('#mainContainer');
function display_book(array) {

  for (let a=0; a < array.length; a++) {

    let bookContainer = document.createElement('div');
    bookContainer.setAttribute('class', 'bookContainer');
    mainContainer.appendChild(bookContainer);

    let bookTitle = document.createElement('p');
    bookTitle.textContent = array[a].title;

    let bookPages = document.createElement('p');
    bookPages.textContent = array[a].pages;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookPages);
  }

  return mainContainer;
}

function createBookButton() {
  let add_button = document.createElement('BUTTON');
  add_button.setAttribute('class', 'create-book-btn');
  add_button.textContent = 'ADD BUTTON';
  mainContainer.appendChild(add_button);
}

createBookButton();
display_book(myLibrary);
