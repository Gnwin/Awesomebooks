import {Book} from './modules/Book.js'
import {Books} from './modules/Books.js'
import {Display} from './modules/Display.js'
import {GrabUserInput} from './modules/GrabUserInput.js'
import {LocalStore} from './modules/LocalStore.js'
import {ShowAndHide} from './modules/ShowAndHide.js'


let element = (book) => `<div class='book'>
<div class=''>
  <p>${book.title}</p>
  <small>by</small>
  <p><small>${book.author}</small></p>
</div>
<button class='removeBtn' onclick=\'grabUserInput.remove(event);\'>Remove</button>
</div>`;
let markup = '<div class=\'pad\'>No Books to display. Click add new to add a book to the list<div>';
let displayBook = new Display(element, markup);
let books;
if (localStorage.length !== 0){
  let b = JSON.parse(localStorage.getItem('books'))
  books = new Books(b);
} else {
  books = new Books([]);
}
const grabUserInput = new GrabUserInput();
const input = grabUserInput.input;
const addB = grabUserInput.addB;
let bookStorage = new LocalStore();
displayBook.display();
const dynamics = new ShowAndHide();
dynamics.showAndHide();