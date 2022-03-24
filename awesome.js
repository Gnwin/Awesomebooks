let books = [
  {
    id: 0,
    title: 'strong men',
    author: 'godwin'
  },
  {
    id: 1,
    title: 'javascript',
    author: 'chioma'
  }
];

function addBook(title, author){
  var id = Math.random().toString(16).slice(2);
  books.push({id, title, author});
  console.log(booklist)
}

function removeBook(title, author){
  books = books.filter(book => {
    return book.title !== title || book.author !== author;
  })
}

function displayBook(){
  let bookList = document.getElementById('booklist');

  let markup = '';
  books.forEach(book => {
    let element = `<div class='book'>
      <div class=''>
        <p>${book.title}</p>
        <p><small>by ${book.author}</small></p>
      </div>
      <button class='removeBtn'>Remove</button>
    </div>`;
    markup += element;
  })
  console.log(markup);
  bookList.innerHTML = markup;
}

displayBook();

let addBtn = document.querySelector('#addBtn');
let input = document.querySelectorAll('[type="text"]');
let remBtn = document.querySelector('.removeBtn');

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
  return false;
})

// var id = Math.random().toString(16).slice(2);
// console.log(id);

