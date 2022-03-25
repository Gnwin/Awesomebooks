const input = document.querySelectorAll('[type="text"]');
const addB = document.getElementById('addBtn');
let books = [];

function setLocalStorage(book) {
  localStorage.setItem('books', JSON.stringify(book));
}

function addBook(title, author) {
  const id = Math.random().toString(16).slice(2);
  books.push({ id, title, author });
  setLocalStorage(books);
}

function removeBook(id) {
  let bookStorage = JSON.parse(localStorage.getItem('books'));
  bookStorage = bookStorage.filter((book) => book.id !== id);
  books = bookStorage;
  setLocalStorage(books);
}

function displayBook() {
  if (localStorage.length === 0) {
    setLocalStorage(books);
  }
  const bookStorage = JSON.parse(localStorage.getItem('books'));
  const bookList = document.getElementById('booklist');
  let markup = '';
  if (bookStorage.length === 0) {
    markup = '<div class=\'pad\'>No Books to display. Click add new to add a book to the list<div>';
  } else {
    bookStorage.forEach((book) => {
      const element = `<div class='book'>
        <div class=''>
          <p>${book.title}</p>
          <small>by</small>
          <p><small>${book.author}</small></p>
        </div>
        <button class='removeBtn' onclick=remove(event);>Remove</button>
      </div>`;
      markup += element;
    });
  }
  bookList.innerHTML = markup;
  bookList.childNodes.forEach((book, index) => {
    if ((index + 1) % 2 !== 0){
      book.className = 'book gray';
    }
  })
}

displayBook();

function add() {
  addB.addEventListener('click', (event) => {
    event.preventDefault();
    if (input[0].value === '' || input[1].value === '') {
      return;
    }
    const title = input[0].value;
    const author = input[1].value;
    addBook(title, author);
    input[0].value = '';
    input[1].value = '';
    displayBook();
  });
}
add();

// eslint-disable-next-line no-unused-vars
function remove(val) {
  val.preventDefault();
  const bookStorage = JSON.parse(localStorage.getItem('books'));
  const book = val.target.parentElement.children[0];
  const title = book.children[0].innerHTML;
  const author = book.children[2].children[0].innerHTML;
  for (let i = 0; i < bookStorage.length; i += 1) {
    if (bookStorage[i].title === title && bookStorage[i].author === author) {
      removeBook(bookStorage[i].id);
    }
  }
  displayBook();
}


const navlist = document.querySelectorAll('.navlink');
const section = document.querySelectorAll('.section');

for (let i=0; i<section.length; i++){
  section[i].style.display = 'none';
  section[0].style.display = 'block';
  navlist[i].addEventListener('click', ()=>{
    for (let j=0; j<section.length; j++){
      if (i === j) continue;
      section[j].style.display = 'none';
    }
    section[i].style.display = 'block';
  })
}
