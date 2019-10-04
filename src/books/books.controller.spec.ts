import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('Books Controller', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all books', async () => {
    const books = await controller.getBooks();
    expect(books).toBeDefined();
    expect(books.length).toBe(6);
  });

  it('should get specific book with id', async () => {
    const book = await controller.getBook(2);
    expect(book).toBeDefined();
    expect(book.id).toBe(2);
  });

  it('should throw error while getting specific book when id does not exist', async () => {
    await expect(controller.getBook(10)).rejects.toThrowError();
  });

  it('should add a book', async () => {
    const book = {
      id: 7,
      title: 'testing',
      description: 'a book about testing',
      author: 'tester',
    };
    const books = await controller.addBook(book);
    expect(books).toBeDefined();
    expect(books.length).toBe(7);
  });

  it('should delete specific book with id', async () => {
    const books = await controller.deleteBook(2);
    expect(books).toBeDefined();
    expect(books.length).toBe(6);
  });

  it('should throw error while deleting specific book when id does not exist', async () => {
    await expect(controller.deleteBook(2)).rejects.toThrowError();
  });
});
