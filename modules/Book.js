export default class Book {
    constructor(title, author){
        this.id = Math.random().toString(16).slice(2),
        this.title = title,
        this.author = author
    }
}
