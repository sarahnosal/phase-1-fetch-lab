function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => json.forEach(book => renderBooks(book)));  
}

function renderBooks() {
  fetchBooks();
  // const main = document.querySelector('main');
  // books.forEach(book => {
  //   var h2 = document.createElement('h2');
  //   h2.innerHTML = book.name;
  //   main.appendChild(h2);
  // });
}

// document.addEventListener('DOMContentLoaded', function() {
//   renderBooks(fetchBooks());
// });

