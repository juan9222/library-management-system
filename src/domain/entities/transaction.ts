export type TransactionEntity = {
    id: number;
    userId: number;
    bookId: number;
    borrowDate: Date; 
    returnDate: Date | null; 
    createdAt: Date;
    updatedAt: Date;
}

export type AddTransactionParams = Omit<TransactionEntity, 'id' | 'createdAt' | 'updatedAt'>;
