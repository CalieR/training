
function areBooksUnique(books) {
    const bookSet = new Set(books);  
    return bookSet.size === books.length;
  }

function getBookCounts(books) {
    const counts = {};
    books.forEach((book) => {
      if (counts[book]) {
        counts[book] += 1;
      } else {
        counts[book] = 1;
      }
    });
    return counts;
  }

  function differentBooksPrice(quantity) {
    switch (quantity) {
      case 1:
       return 800;
      case 2:
        return (800 * 2) * 0.95;
      case 3:
        return (800 * 3) * 0.90;
      case 4:
        return (800 * 4) * 0.80;
      case 5:
        return (800 * 5) * 0.75;
      default:
        return 0;
    }
  }

  const duplicates = getBookCounts([1, 1,  2, 3, 3, 4, 4, 4, 5, 5]);
  //const noDuplicates = getBookCounts([1, 2, 3, 4, 5]);

// reduce using differentBooksPrice to calculate the total for each entry
// instead of passing books.length you pass counts[key]
// console.log(Object.values(duplicates))
// const total = Object.values(duplicates).reduce((acc, count) => console.log(acc + differentBooksPrice(count), 0));

//console.log(total);
const duplicatesArr = [1, 1, 2, 2, 3, 3, 4, 5];

const arraysObj = {
    1: [1,2,3,4],
    2: [1,2,3,5],
}