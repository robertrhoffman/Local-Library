function findAuthorById(authors, id) {
  let result = {}
  for (let i=0; i<authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i]
    }
  }  return result
}


function findBookById(books, id) {
  let result = {}
  for (let i=0; i<books.length; i++) {
    if (books[i].id === id) {
      return books[i]
    }
  }
  return result
}


function partitionBooksByBorrowedStatus(books) {
  const result = books.reduce((account, item) => {
    if (item.borrows.find(item => item.returned === false)) {
      account[0].push(item)
    } else {
      account[1].push(item)
    }
    return account
  }, [[], []])
  return result
}


function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.map((account) => {
    book.borrows.find((borrow) => {
      if (borrow.id === account.id) {
        account["returned"] = borrow.returned
        borrowers.push(account)
      }

    })
  })
  return borrowers.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
