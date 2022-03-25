export class Display {
    constructor(element, markup){
      this.element = element
      this.markup = markup;
    }
  
    display(){
      const bookStorage = JSON.parse(localStorage.getItem('books'));
      const bookList = document.getElementById('booklist');
      let markup1 = '';
      if (bookStorage.length === 0) {
        bookList.innerHTML = this.markup;
      } else {
        bookStorage.forEach((book) => {
          const elemenT = this.element(book);
          markup1 += elemenT;
        });
        bookList.innerHTML = markup1;
        bookList.childNodes.forEach((book, index) => {
          if ((index + 1) % 2 !== 0){
            book.className = 'book gray';
          }
        })
      }
    }
  }