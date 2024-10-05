import { AddTransactionParams } from '@/domain/entities/transaction';
export const TRANSACTION_REPOSITORY = 'TRANSACTION_REPOSITORY';

export interface ITransactionRepository {
  createTransaction(transaction: AddTransactionParams): Promise<any>;
  completeTransaction(userId: number, bookId: number): Promise<void>;
  getCurrentBorrowedBooks(userId: number): Promise<any>;
  getBorrowHistory(userId: number): Promise<any>;
}
