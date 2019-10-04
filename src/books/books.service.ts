import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
    constructor(
      @InjectRepository(Book)
      private readonly bookRepository: Repository<Book>,
    ) {}

  async getBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async getBook(bookId): Promise<Book> {
    const id = Number(bookId);
    return await this.bookRepository.findOne(id);
  }

  async addBook(book): Promise<any> {
    return await this.bookRepository.insert(book);
  }

  async deleteBook(bookID): Promise<any> {
    const id = Number(bookID);
    return await this.bookRepository.delete(id);
  }
}
