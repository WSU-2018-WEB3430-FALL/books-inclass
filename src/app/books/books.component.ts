import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { SAMPLE_BOOKS } from '../sample-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Array<Book> = SAMPLE_BOOKS ;

  constructor() { }

  ngOnInit() {
  }

  onClick(book: Book): void {
    console.log(book);
  }

}
