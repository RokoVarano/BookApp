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
  add_button.addEventListener('click', displayForm, false);

  mainContainer.appendChild(add_button);
}

function displayForm() {
  let form = document.querySelector('#book_form');

  if (form.style.display == 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function addBookForm() {
  let form = document.querySelector('#book_form');
  form.setAttribute('class', 'book_form');
  
  let title_input = document.createElement('INPUT');
  title_input.setAttribute('type', 'text');
  title_input.setAttribute('name', 'title');
  
  let page_input = document.createElement('INPUT');
  page_input.setAttribute('type', 'text');
  page_input.setAttribute('name', 'page');

  let submit_input = document.createElement('INPUT');
  submit_input.setAttribute('type', 'submit');
  submit_input.setAttribute('value', 'Add Book');
  
  form.appendChild(title_input);
  form.appendChild(page_input);
  form.appendChild(submit_input);

  mainContainer.appendChild(form);
}

createBookButton();
addBookForm();
display_book(myLibrary);
