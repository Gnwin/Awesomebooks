// display Books
// eslint-disable-next-line import/no-cycle
import grabUserInput from './GrabUserInput.js';
import element from './Markup.js';
import blank from './Blank.js';

class Display {
  // eslint-disable-next-line class-methods-use-this
  display() {
    const bookStorage = JSON.parse(localStorage.getItem('books'));
    const bookList = document.getElementById('booklist');
    let markup1 = '';
    if (bookStorage.length === 0) {
      bookList.innerHTML = blank;
    } else {
      bookStorage.forEach((book) => {
        const elemenT = element(book);
        markup1 += elemenT;
      });
      bookList.innerHTML = markup1;
      bookList.childNodes.forEach((book, index) => {
        if ((index + 1) % 2 !== 0) {
          book.className = 'book gray';
        }
      });
      const removeB = document.querySelectorAll('.removeBtn');
      for (let i = 0; i < removeB.length; i += 1) {
        removeB[i].onclick = grabUserInput.remove;
      }
    }
  }
}

const displayBook = new Display();
export default displayBook;