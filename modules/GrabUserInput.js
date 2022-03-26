// User add and remove books
// eslint-disable-next-line import/no-cycle
import Books from './Books.js';

class GrabUserInput {
  // eslint-disable-next-line class-methods-use-this
  add(event) {
    event.preventDefault();
    const input = document.querySelectorAll('[type="text"]');
    if (input[0].value === '' || input[1].value === '') {
      return;
    }
    const title = input[0].value;
    const author = input[1].value;
    Books.add(title, author);
    input[0].value = '';
    input[1].value = '';
    const section = document.querySelectorAll('.section');
    section[0].style.display = 'block';
    section[1].style.display = 'none';
  }

  // eslint-disable-next-line class-methods-use-this
  remove(val) {
    val.preventDefault();
    const bookStorage = JSON.parse(localStorage.getItem('books'));
    const book = val.target.parentElement.children[0];
    const title = book.children[0].innerHTML;
    const author = book.children[2].children[0].innerHTML;
    for (let i = 0; i < bookStorage.length; i += 1) {
      if (bookStorage[i].title === title && bookStorage[i].author === author) {
        Books.remove(bookStorage[i].id);
      }
    }
  }
}

const grabUserInput = new GrabUserInput();
export default grabUserInput;
