export class Books {
    constructor(book){
      this.booklist = book;
    }
    
    static add(title, author){
      let book = new Book(title, author);
      books.booklist.push(book);
      bookStorage.setLocalStorage(books.booklist);
      displayBook.display();
    }
  
    static remove(id){
      let bookk = JSON.parse(localStorage.getItem('books'));
      bookk = bookk.filter((book) => book.id !== id);
      books.booklist = bookk;
      bookStorage.setLocalStorage(books.booklist);
      displayBook.display();
    }
  }