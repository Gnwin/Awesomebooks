
const element = (book) => `<div class='book'>
  <div class=''>
  <p>${book.title}</p>
  <small>by</small>
  <p><small>${book.author}</small></p>
  </div>
  <button class='removeBtn'>Remove</button>
</div>`;

export default element