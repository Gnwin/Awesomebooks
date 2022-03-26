// Book class
export default class Book {
  constructor(title, author) {
    // eslint-disable-next-line no-unused-expressions
    this.id = Math.random().toString(16).slice(2);
    this.title = title;
    this.author = author;
  }
}
