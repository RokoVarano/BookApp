const myLibrary = [];

const formContainer = document.getElementById('form_container');
const bookShelf = document.getElementById('book_shelf');

let bookID = myLibrary.length - 1;
function Book(title, pages) {
  this.id = bookID;
  bookID += 1;

  this.title = title;
  this.pages = pages;
  this.read = false;
}

function addBook(book){
  const bookContainer = document.createElement('div');
  bookContainer.setAttribute('class', 'bookContainer');
  bookContainer.setAttribute('id', '');
  bookShelf.appendChild(bookContainer);

  const bookTitle = document.createElement('p');
  bookTitle.textContent = book.title;

  const bookPages = document.createElement('p');
  bookPages.textContent = book.pages;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookPages);

  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', () => { deleteBook(bookContainer, book); });
  deleteButton.textContent = 'Delete';
  bookContainer.appendChild(deleteButton);

  const readButton = document.createElement('button');
  book.read = true;
  readBook(readButton, book);
  readButton.addEventListener('click', () => { readBook(readButton, book); })
  readButton.textContent = 'Read';
  bookContainer.appendChild(readButton);
}

function addBookToLibrary(){
  const titleInput = document.querySelector('#title');
  const pageInput = document.querySelector('#pages');
  const buttonInput = document.querySelector('.button');

  buttonInput.addEventListener('click', () => {
    const book = new Book(titleInput.value, pageInput.value);
    myLibrary.push(book);
    addBook(myLibrary[myLibrary.length-1]);
  });
}

function displayInitialBooks(array){
  for (let a=0; a < array.length; a++) {
    addBook(array[a])
  }
}


function displayForm(){
  let form = document.querySelector('#book_form');

  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function createBookButton(){
  const addButton = document.getElementById('display_form');
  addButton.setAttribute('class', 'create-book-btn');
  addButton.addEventListener('click', displayForm, false);

  formContainer.appendChild(addButton);
}

function deleteBook(bookContainer, book){
  bookContainer.parentNode.removeChild(bookContainer);
  myLibrary.splice(book.id, 1);
}

function addBookForm(){
  let form = document.querySelector('#book_form');
  form.setAttribute('class', 'book_form');
  
  const titleInput = document.createElement('INPUT');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('id', 'title');

  const pageInput = document.createElement('INPUT');
  pageInput.setAttribute('type', 'number');
  pageInput.setAttribute('name', 'pages');
  pageInput.setAttribute('id', 'pages');

  const submitInput = document.createElement('INPUT');
  submitInput.setAttribute('type', 'button');
  submitInput.setAttribute('class', 'button');
  submitInput.setAttribute('value', 'Add Book');
  
  form.appendChild(titleInput);
  form.appendChild(pageInput);
  form.appendChild(submitInput);

  formContainer.appendChild(form);
}

function readBook(readButton, book){
  if (book.read === false) {
    readButton.style.backgroundColor = 'green';
    } 
  
  if (book.read === true) {
    readButton.style.backgroundColor = 'red';
  } 

  book.read = !book.read;
}

createBookButton();
addBookForm();
addBookToLibrary();
displayInitialBooks(myLibrary);