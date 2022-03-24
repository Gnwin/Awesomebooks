let addBtn = document.querySelector('#addBtn');
let input = document.querySelectorAll('[type="text"]');
let remBtns = document.querySelectorAll('.removeBtn');

let books = [
  // {
  //   id: 0,
  //   title: 'strong men',
  //   author: 'godwin'
  // },
  // {
  //   id: 1,
  //   title: 'javascript',
  //   author: 'chioma'
  // }
];

function addBook(title, author){
  var id = Math.random().toString(16).slice(2);
  books.push({id, title, author});
  console.log(booklist);
}

function removeBook(id){
  books = books.filter(book => {
    return book.id !== id;
  })
}

function displayBook(){
  let bookList = document.getElementById('booklist');
  let markup = '';
  let element;
  if (books.length === 0) {
    element = `<div>No Books to display. Click add new to add a book to the list<div>`;
    markup = element;
  } else {
    books.forEach(book => {
      element = `<div class='book'>
        <div class=''>
          <p>${book.title}</p>
          <small>by</small>
          <p><small>${book.author}</small></p>
        </div>
        <button class='removeBtn' onclick='remove(event);'>Remove</button>
      </div>`;
      markup += element;
    })
  }
  bookList.innerHTML = markup;
}

displayBook();


addBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(input[0].value === '' || input[1].value === ''){
    return;
  }
  let title = input[0].value;
  let author = input[1].value;
  console.log(title, author);

  addBook(title, author);
  input[0].value = '';
  input[1].value = '';
  displayBook();
  remBtns = document.querySelectorAll('.removeBtn');
  // return false;
})


let remove = (val) => {
  let book = val.target.parentElement.children[0];
  let title = book.children[0].innerHTML;
  let author = book.children[2].children[0].innerHTML;
  for (let i=0; i<books.length; i++){
    if (books[i].title === title && books[i].author === author){
      removeBook(books[i].id);
    }
  }
  displayBook();
}

