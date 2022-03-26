// display Books
import grabUserInput from './GrabUserInput.js'
import element from './markup.js'
import blank from './blank.js'

class Display {
  display(){
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
        if ((index + 1) % 2 !== 0){
          book.className = 'book gray';
        }
      })
      const removeB = document.querySelectorAll('.removeBtn');
      for(let i=0; i<removeB.length; i++){
        removeB[i].onclick = grabUserInput.remove;
      }
    }
  }
}

const displayBook = new Display();  
export default displayBook;