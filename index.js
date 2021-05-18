let myLibrary = [];
let bookID = myLibrary.length - 1;

let mainContainer = document.querySelector('#mainContainer');
let form_container = document.getElementById('form_container');
let book_shelf = document.getElementById('book_shelf');

function Book(title, pages) {
  this.id = bookID;
  bookID++;

  this.title = title;
  this.pages = pages;
}

function addBookToLibrary(title, pages) {

  const book = new Book(title, pages);

  myLibrary.push(book);

  add_book(myLibrary[myLibrary.length-1]);
}

function add_book(book) {

  let bookContainer = document.createElement('div');
  bookContainer.setAttribute('class', 'bookContainer');
  bookContainer.setAttribute('id', '')
  book_shelf.appendChild(bookContainer);

  let bookTitle = document.createElement('p');
  bookTitle.textContent = book.title;

  let bookPages = document.createElement('p');
  bookPages.textContent = book.pages;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookPages);

  let delete_button = document.createElement('button');
  delete_button.addEventListener('click', function() {deleteBook(bookContainer, book)})
  delete_button.textContent = 'Delete';
  bookContainer.appendChild(delete_button);
}

function display_initial_books(array) {

  for (let a=0; a < array.length; a++) {
    add_book(array[a])
  }
}

function createBookButton() {
  let add_button = document.getElementById('display_form');
  add_button.setAttribute('class', 'create-book-btn');
  add_button.addEventListener('click', displayForm, false);

  form_container.appendChild(add_button);
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
  title_input.setAttribute('id', 'title');

  let page_input = document.createElement('INPUT');
  page_input.setAttribute('type', 'text');
  page_input.setAttribute('name', 'pages');
  page_input.setAttribute('id', 'pages');

  let submit_input = document.createElement('INPUT');
  submit_input.setAttribute('type', 'button');
  submit_input.setAttribute('value', 'Add Book');
  submit_input.setAttribute('onclick', "addBookToLibrary(document.getElementById('title').value, document.getElementById('pages').value)");
  
  form.appendChild(title_input);
  form.appendChild(page_input);
  form.appendChild(submit_input);

  form_container.appendChild(form);
}

function deleteBook(bookContainer, book) {
  console.log('delete');
  bookContainer.parentNode.removeChild(bookContainer);
  myLibrary.splice(book.id, 1);
}

createBookButton();
addBookForm();
display_initial_books(myLibrary);
