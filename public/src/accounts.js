// Returns account object with the matching id
function findAccountById(accounts, id) {
  const findUser = accounts.find((account) => account.id === id);
  return findUser;
}

// Returns an array of acounts sorted by last name
function sortAccountsByLastName(accounts) {
  const sortedNames = accounts.sort((lastA, lastB) =>
    lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1
  );
  return sortedNames;
}

// Returns total number of books checked out by an account
function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  let { id } = account;
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (id === borrow.id) {
        total++;
      }
    });
  });

  return total;
}

// Returns an array of books and auothrs of all currently checked out books 
function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];

  books.forEach((book) => {
    let bookBorrows = book.borrows;

    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });

  return result;
}

// Helper function returns author object
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
