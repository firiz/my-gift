import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiCreatedResponse, ApiForbiddenResponse, ApiUseTags} from '@nestjs/swagger';
import {BooksService} from './books.service';
import {Book} from './book.entity';
import {CreateBookDTO} from './dto/create-book.dto';
import {GetBookDTO} from './dto/get-book.dto';

@ApiUseTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get()
  async getBooks() {
    return await this.booksService.getBooks();
  }

  @Get(':bookID')
  @ApiCreatedResponse({ type: [GetBookDTO] })
  async getBook(@Param('bookID') bookID: string) {
    return await this.booksService.getBook(bookID);
  }

  @Post()
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: [GetBookDTO] })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = new Book(createBookDTO.title, createBookDTO.description, createBookDTO.author);
    await this.booksService.addBook(book);
    return await this.booksService.getBooks();
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID') bookID: string) {
    await this.booksService.deleteBook(bookID);
    return await this.booksService.getBooks();
  }
}
