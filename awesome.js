let booklist = [
  // {
  //   title: 'strong men',
  //   author: 'godwin'
  // },
  // {
  //   title: 'javascript',
  //   author: 'chioma'
  // },
];

function addBook(title, author){
  booklist.push({title, author})
  console.log(booklist)
}
// addBook('fjjfjhf', 'nfnvvnhn');

function removeBook(title, author){
  booklist = booklist.filter(book => {
    return book.title !== title || book.author !== author;
  })
}

function displayBook(){
  let bookList = document.getElementById('booklist');

  let markup = '';
  booklist.forEach(book => {
    let element = `<div class=''>
    <p class=''>${book.title}</p>
    <p class=''>${book.author}</p>
    </div>`;
    markup += element;
  })
  console.log(markup);
  bookList.innerHTML = markup;
}

// displayBook();

let addBtn = document.querySelector('#addBtn');
let input = document.querySelectorAll('[type="text"]');
addBtn.addEventListener('click', ()=>{
  if(input[0].value === '' || input[1].value === ''){
    return;
  }
  let title = input[0].value;
  let author = input[1].value;
  addBook(title, author);
  displayBook();
  // input[0].value = '';
  // input[1].value = '';
  // return false;
})

