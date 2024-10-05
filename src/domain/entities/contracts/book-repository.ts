export const BOOK_REPOSITORY = 'BOOK_REPOSITORY';

export interface IBookRepository {
    getAllAvailableBooks(): Promise<any[]>;
    updateBookStatus(bookId: number, status: 'available' | 'borrowed'): Promise<any>;
}
