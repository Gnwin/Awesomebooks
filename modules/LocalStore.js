// localStorage write access

export default class LocalStore {
  // eslint-disable-next-line class-methods-use-this
  setLocalStorage(book) {
    localStorage.setItem('books', JSON.stringify(book));
  }
}