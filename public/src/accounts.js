function findAccountById(accounts, id) {
  for (let i=0; i<accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i]
    }
  }
}


function sortAccountsByLastName(accounts) {
return accounts.sort((a, b) => a.name.last > b.name.last ? 1:-1)
  }


function getTotalNumberOfBorrows(account, books) {
  let borrowsNumber = [];
  for (let i=0; i<books.length; i++) {
    const book = books[i].borrows
    for (let k=0; k<book.length; k++) {
      let borrowId = book[k].id
      borrowsNumber.push(borrowId)
    }
  }
  let idMatch = borrowsNumber.filter((matches) => matches === account.id)
  return idMatch.length
}


function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows.find(item => item.returned === false && item.id === account.id)).map(book => {
    book.author = authors.find(name => name.id === book.authorId)
    return book
  })
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
