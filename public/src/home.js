function getTotalBooksCount(books) {
  return books.length
}


function getTotalAccountsCount(accounts) {
  return accounts.length
}


function getBooksBorrowedCount(books) {
  let borrowedBooks = [];
  for (let i=0; i<books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      borrowedBooks.push(books[i]);
    }
  }
  let borrowedTotal = borrowedBooks.length;
  return borrowedTotal;
}



function getMostCommonGenres(books) {
  const genres = {}
  for (let prop in books) {
    const book = books[prop]
    if (genres[book.genre]) {
      genres[book.genre]++
    } else {
      genres[book.genre] = 1
    }
  }
  console.log(genres)
  let genreCount = []
  for (let i in genres) {
    genreCount.push({
      name: i,
      count: genres[i]
    })
  }
  console.log(genreCount)
  genreCount = sortByCount(genreCount)
    .filter((item, i) => i < 5)
  return genreCount
}



function getMostPopularBooks(books) {
  const result = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  return sortByCount(result)
    .filter((item, i) => i < 5)
}
//helper function
function sortByCount(array) {
return array.sort((a, b) => b.count - a.count)
}



function getMostPopularAuthors(books, authorsList) {
  const authors = {}
  for (let i in books) {
    const book = books[i]
    if (authors[book.authorId]) {
      authors[book.authorId] += book.borrows.length
    } else {
      authors[book.authorId] = book.borrows.length
    }
  }
  let countAuthor = []
  for (let i in authors) {
    const authorFound = authorsList.find(a => a.id == i)
    countAuthor.push({
      name: authorFound.name.first + " " + authorFound.name.last,
      count: authors[i]
    })
  }
  countAuthor = countAuthor.sort((a, b) => b.count - a.count)
    .filter((item, i) => i < 5)
  return countAuthor
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
