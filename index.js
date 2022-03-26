//entry point index.js
import displayBook from './modules/Display.js'
import Books from './modules/Books.js'
import grabUserInput from './modules/GrabUserInput.js'
import ShowAndHide from './modules/ShowAndHide.js'
import { DateTime } from './luxon.min.js';
import datePlace from './modules/Dateplace.js'

let books;
if (localStorage.length !== 0){
  let b = JSON.parse(localStorage.getItem('books'))
  books = new Books(b);
} else {
  books = new Books([]);
  localStorage.setItem('books', JSON.stringify(books.booklist));
}

const addB = document.getElementById('addBtn');
addB.addEventListener('click', grabUserInput.add);

displayBook.display();
const dynamics = new ShowAndHide();
dynamics.showAndHide();

const dt = DateTime.now();
datePlace.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);