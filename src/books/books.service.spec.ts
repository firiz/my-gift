import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { BooksReporsitoryMock } from './mock/books.repository.mock';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: new BooksReporsitoryMock(),
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
    await service.addBook(book);
  });

  it('should delete specific book with id', async () => {
    await service.deleteBook(1);
  });

  it('should throw error while deleting specific book when id does not exist', async () => {
    await expect(service.deleteBook(10)).rejects.toThrowError();
  });
});
