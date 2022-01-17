var book = [
  {
    isbn: '123456789',
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    isbn: '246802468',
    title: 'Percy Jackson',
    author: 'Rick Riordan'
  },
  {
    isbn: '135790159',
    title: 'Demon King',
    author: 'Cinda Williams'
  }
];

console.log('value of book: ', book);
console.log('value of typeof book: ', typeof book);
var jsonBook = JSON.stringify(book);
console.log('value of jsonBook: ', jsonBook);
console.log('value of typeof jsonBook: ', typeof jsonBook);
var jsonStudent = '{"id": 12345,"name": "Michael"}';
console.log('value of jsonStudent: ', jsonStudent);
console.log('value of typeof jsonStudent: ', typeof jsonStudent);
var example = JSON.parse(jsonStudent);
console.log('value of example: ', example);
console.log('value of typeof example: ', typeof example);
