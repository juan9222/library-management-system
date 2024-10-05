export const BOOK_REPOSITORY = 'BOOK_REPOSITORY';

export interface IBookRepository {
  getBooks(): Promise<any[]>;
  getBookById(bookId: number): Promise<any>;
  updateBookStatus(bookId: number, status: 'available' | 'borrowed'): Promise<void>;
}
