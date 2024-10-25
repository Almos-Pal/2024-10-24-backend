import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';


const books: Book[] = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    isbn: '123456',
    publishYear: 2021,
    reserved: false,


  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    isbn: '123457',
    publishYear: 2022,
    reserved: false,
  }
];
let nextId = books.length ;

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    nextId++;
    books.push({
      id: nextId,
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishYear: createBookDto.publishYear,
      reserved: false,
  });
      return this.findAll();
  }

  findAll() {
    return { books };
  }

  findOne(id: number) {
    return {
       book: books.find((book) => book.id === id)
  };
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    const book = this.findOne(id);
   updateBookDto.title? book.book.title = updateBookDto.title : book.book.title;
    updateBookDto.author? book.book.author = updateBookDto.author : book.book.author;
   updateBookDto.isbn? book.book.isbn = updateBookDto.isbn: book.book.isbn;
   updateBookDto.publishYear? book.book.publishYear = updateBookDto.publishYear: book.book.publishYear;
   updateBookDto.reserved? book.book.reserved = updateBookDto.reserved: book.book.reserved;
    return book;
  }

  remove(id: number) {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
    }
  }

 
}
