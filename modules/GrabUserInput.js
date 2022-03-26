import Books from './Books.js'

export default class GrabUserInput {  
    add(event){
      event.preventDefault();
      const input = document.querySelectorAll('[type="text"]')
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
    
    remove(event){
      event.preventDefault();
      const bookStorage = JSON.parse(localStorage.getItem('books'));
      const book = event.target.parentElement.children[0];
      const title = book.children[0].innerHTML;
      const author = book.children[2].children[0].innerHTML;
      for (let i = 0; i < bookStorage.length; i += 1) {
        if (bookStorage[i].title === title && bookStorage[i].author === author) {
          Books.remove(bookStorage[i].id);
        }
      }
    }
  }