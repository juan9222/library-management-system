export const BOOK_REPOSITORY = 'BOOK_REPOSITORY';

export interface IBookRepository {
  getBookById(bookId: number): Promise<any>;
  updateBookStatus(bookId: number, status: 'available' | 'borrowed'): Promise<void>;
}
