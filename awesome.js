const input = document.querySelectorAll('[type="text"]');
let books = [];

function setLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}



function addBook(title, author) {
  let id = Math.random().toString(16).slice(2);
  books.push({ id, title, author });
  setLocalStorage();
}

function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  setLocalStorage()
}

function displayBook() {
  if (localStorage.length === 0){
    setLocalStorage();
  }
  const bookStorage = JSON.parse(localStorage.getItem('books'));
  let bookList = document.getElementById('booklist');
  let markup = '';
  
  if (bookStorage.length === 0) {
    markup = `<div class='pad'>No Books to display. Click add new to add a book to the list<div>`;
  } else {
    bookStorage.forEach(book => {
      let element = `<div class='book'>
        <div class=''>
          <p>${book.title}</p>
          <small>by</small>
          <p><small>${book.author}</small></p>
        </div>
        <button class='removeBtn' onclick = remove(event);>Remove</button>
      </div>`;
      markup += element;
    })
  }
  bookList.innerHTML = markup;
}
displayBook();
function add(event) {
  event.preventDefault();
  if(input[0].value === '' || input[1].value === ''){
    return;
  }
  let title = input[0].value;
  let author = input[1].value;
  addBook(title, author);
  input[0].value = '';
  input[1].value = '';
  displayBook();
  // return false;
}


function remove(event) {
  event.preventDefault();
  const bookStorage = JSON.parse(localStorage.getItem('books'));
  const book = event.target.parentElement.children[0];
  const title = book.children[0].innerHTML;
  const author = book.children[2].children[0].innerHTML;
  for (let i = 0; i < bookStorage.length; i+=1){
    if (bookStorage[i].title === title && bookStorage[i].author === author){
      removeBook(bookStorage[i].id);
    }
  }
  displayBook();
}