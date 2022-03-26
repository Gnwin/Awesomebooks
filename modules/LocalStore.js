export default class LocalStore {
    setLocalStorage(book){
      localStorage.setItem('books', JSON.stringify(book));
    }
}