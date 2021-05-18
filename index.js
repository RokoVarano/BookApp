let myLibrary = [{title: "first book", "pages": 45}, {title: "second book", "pages": 12}, {title: "third book", "pages": 102}];

function Book() {
  
}

function addBookToLibrary() {
  
}

function display_book(array) {
  let mainContainer = document.querySelector('#mainContainer');

  for (let a=0; a > array.length; a++) {
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
}

console.log('JAVASCRIPT!!!');
console.log(myLibrary);
console.log(display_book(myLibrary));

display_book(myLibrary);