//entry point index.js
import displayBook from './modules/Display.js'
import Books from './modules/Books.js'
import grabUserInput from './modules/GrabUserInput.js'
import ShowAndHide from './modules/ShowAndHide.js'

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
