class Book {
  constructor(title, author){
    this.id = Math.random().toString(16).slice(2),
    this.title = title,
    this.author = author
  }
}
  
class Books {
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
  
class GrabUserInput {
  constructor(){
    this.input = document.querySelectorAll('[type="text"]'),
    this.addB = document.getElementById('addBtn')
  }

  add(val){
    val.preventDefault();
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
  
  remove(val){
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
  
class LocalStore {
  setLocalStorage(book){
    localStorage.setItem('books', JSON.stringify(book));
  }
}

class Display {
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

class ShowAndHide {
  constructor(){
    this.navlist = document.querySelectorAll('.navlink');
    this.section = document.querySelectorAll('.section');
  }

  showAndHide(){
    for (let i=0; i<this.section.length; i++){
      this.section[i].style.display = 'none';
      this.section[0].style.display = 'block';
      this.navlist[i].addEventListener('click', ()=>{
        for (let j=0; j<this.section.length; j++){
          if (i === j) continue;
          this.section[j].style.display = 'none';
        }
        this.section[i].style.display = 'block';
      })
    }
  }
}


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
