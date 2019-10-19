import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { BooksRepositoryMock } from './mock/books.repository.mock';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: new BooksRepositoryMock(),
        },
      ],
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
    const book = await service.getBook('1');
    expect(book).toBeDefined();
    expect(book.id).toBe('1');
  });

  it('should throw error while getting specific book when id does not exist', async () => {
    await expect(service.getBook('10')).rejects.toThrowError();
  });

  it('should add a book', async () => {
    const book = new Book('testing', 'a book about testing', 'tester');
    await service.addBook(book);
  });

  it('should delete specific book with id', async () => {
    await service.deleteBook('1');
  });

  it('should throw error while deleting specific book when id does not exist', async () => {
    await expect(service.deleteBook('10')).rejects.toThrowError();
  });
});
