// Returns author object with the matching the id 
function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id);
  return findAuthor;
}

// Return book object with the matching the id
function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id);
  return findBook;
}

// Returns an array of books borrowed and books that have been returned 
function partitionBooksByBorrowedStatus(books) {
  let result = [];

  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);

  result.push(borrowed, returned);

  return result;
}

// Returns an array of the top 10 borrow transactions and account info
function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id);
    return { ...borrows, ...account };
  });

  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
