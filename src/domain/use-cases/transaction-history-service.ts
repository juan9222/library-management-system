export const TRANSACTION_HISTORY_SERVICES = 'TRANSACTION_HISTORY_SERVICES';

export interface ITransactionHistoryService {
  getBorrowedBooks(userId: number): Promise<any>;
  getUserHistory(userId: number): Promise<any>;
}
