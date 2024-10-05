export const RETURN_BOOK_SERVICES = 'RETURN_BOOK_SERVICES';

export interface IReturnBookService {
  returnBook(userId: number, bookId: number): Promise<void>;
}
