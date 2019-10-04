import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all books', async () => {
    const books = await service.getBooks();
    expect(books).toBeDefined();
    expect(books.length).toBe(6);
  });

  it('should get specific book with id', async () => {
    const book = await service.getBook(1);
    expect(book).toBeDefined();
    expect(book.id).toBe(1);
  });

  it('should throw error while getting specific book when id does not exist', async () => {
    await expect(service.getBook(10)).rejects.toThrowError();
  });

  it('should add a book', async () => {
    const book = {
      id: 7,
      title: 'testing',
      description: 'a book about testing',
      author: 'tester',
    };
    const books = await service.addBook(book);
    expect(books).toBeDefined();
    expect(books.length).toBe(7);
  });

  it('should delete specific book with id', async () => {
    const books = await service.deleteBook(1);
    expect(books).toBeDefined();
    expect(books.length).toBe(6);
  });

  it('should throw error while deleting specific book when id does not exist', async () => {
    await expect(service.deleteBook(10)).rejects.toThrowError();
  });
});
