const BOOKS = [
  { id: 1, title: 'First book', description: 'This is the description for the first book', author: 'Olususi Oluyemi' },
  { id: 2, title: 'Second book', description: 'This is the description for the second book', author: 'John Barry' },
  { id: 3, title: 'Third book', description: 'This is the description for the third book', author: 'Clement Wilfred' },
  { id: 4, title: 'Fourth book', description: 'This is the description for the fourth book', author: 'Christian nwamba' },
  { id: 5, title: 'Fifth book', description: 'This is the description for the fifth book', author: 'Chris anderson' },
  { id: 6, title: 'Sixth book', description: 'This is the description for the sixth book', author: 'Olususi Oluyemi' },
];

export class BooksReporsitoryMock {
  books = BOOKS;

  async find() {
    return this.books;
  }

  async findOne(id) {
    const index = this.books.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error();
    }
    return this.books[index];
  }

  async insert(book) {
    this.books.push(book);
  }

  async delete(id) {
    const index = this.books.findIndex(b => b.id === id);
    if (index === -1) {
      throw new Error();
    }
    this.books.splice(index, 1);
  }
}
