import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SAMPLE_BOOKS } from './sample-books';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Observable<Array<Book>> {
    return of(SAMPLE_BOOKS)
  }
}
