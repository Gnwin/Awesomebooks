// Book class
import Book from './Book.js'
import LocalStore from './LocalStore.js'
import displayBook from './Display.js'

//set up local storage access
let bookStorage = new LocalStore();

export default class Books {
  constructor(book){
    this.booklist = book;
  }
  
  static add = (title, author) => {
    let book = new Book(title, author);
    let booksArr = JSON.parse(localStorage.getItem('books'));
    booksArr.push(book);
    this.booklist = book;
    bookStorage.setLocalStorage(booksArr);
    displayBook.display();
  }

  static remove = (id) =>{
    let booksArr = JSON.parse(localStorage.getItem('books'));
    booksArr = booksArr.filter((book) => book.id !== id);
    this.booklist = booksArr;
    bookStorage.setLocalStorage(booksArr);
    displayBook.display();
  }
}

