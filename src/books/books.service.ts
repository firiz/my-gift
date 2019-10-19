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

  async getBook(bookId: string): Promise<Book> {
    return await this.bookRepository.findOne(bookId);
  }

  async addBook(book: Book): Promise<any> {
    return await this.bookRepository.insert(book);
  }

  async deleteBook(bookId: string): Promise<any> {
    return await this.bookRepository.delete(bookId);
  }
}
