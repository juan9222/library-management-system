export const BORROW_BOOK_SERVICES = 'BORROW_BOOK_SERVICES';

export interface IBorrowBookService {
  borrowBook(userId: number, bookId: number): Promise<void>;
}
