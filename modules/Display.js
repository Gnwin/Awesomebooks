let element = (book) => `<div class='book'>
    <div class=''>
    <p>${book.title}</p>
    <small>by</small>
    <p><small>${book.author}</small></p>
    </div>
    <button class='removeBtn'>Remove</button>
</div>`;
let markup = '<div class=\'pad\'>No Books to display. Click add new to add a book to the list<div>';

class Display {
    display(){
      const bookStorage = JSON.parse(localStorage.getItem('books'));
      console.log(bookStorage);
      const bookList = document.getElementById('booklist');
      let markup1 = '';
      if (bookStorage.length === 0) {
        bookList.innerHTML = markup;
      } else {
        bookStorage.forEach((book) => {
          const elemenT = element(book);
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

  const displayBook = new Display();  
  export default displayBook;