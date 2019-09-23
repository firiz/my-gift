import { Controller, Get, Post, Delete, Param, Body, Query, HttpException } from '@nestjs/common';
import { ApiUseTags, ApiCreatedResponse, ApiForbiddenResponse } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@ApiUseTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID: number) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: [CreateBookDTO] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID') bookID: number) {
    const books = await this.booksService.deleteBook(bookID);
    return books;
  }
}
