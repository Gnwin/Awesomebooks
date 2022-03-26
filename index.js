import displayBook from './modules/Display.js'
import Books from './modules/Books.js'
import  GrabUserInput from './modules/GrabUserInput.js'
import ShowAndHide from './modules/ShowAndHide.js'


let books;
if (localStorage.length !== 0){
  let b = JSON.parse(localStorage.getItem('books'))
  books = new Books(b);
} else {
  books = new Books([]);
  localStorage.setItem('books', JSON.stringify(books.booklist));
}

const grabUserInput = new GrabUserInput();

const addB = document.getElementById('addBtn');
addB.addEventListener('click', grabUserInput.add);

// const section = document.getElementById('booklist');
// if(section.childNodes.length !== 0){
//   const removeB = document.querySelectorAll('.removeBtn');
//   for(let i = 0; i< removeB.length; i+=1){
//     removeB[i].addEventListener('click', grabUserInput.remove);
//   }
//   console.log(removeB);
// //   // onclick=grabUserInput.remove(event);
// }

displayBook.display();
const dynamics = new ShowAndHide();
dynamics.showAndHide();