export type TransactionEntity = {
    // Attributes
}

export type AddTransactionParams = Omit<TransactionEntity, 'id'>
