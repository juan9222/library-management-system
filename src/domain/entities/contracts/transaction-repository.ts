export const TRANSACTION_REPOSITORY = 'TRANSACTION_REPOSITORY';

export interface ITransactionRepository {
    createTransaction(userId: number, bookId: number): Promise<any>;
    updateReturnDate(transactionId: number): Promise<any>;
    getBorrowedBooksByUser(userId: number): Promise<any[]>;
    getBorrowingHistoryByUser(userId: number): Promise<any[]>;
}
