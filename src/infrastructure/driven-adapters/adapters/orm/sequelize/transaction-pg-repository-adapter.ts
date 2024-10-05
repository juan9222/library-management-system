import { ITransactionRepository } from "@/domain/entities/contracts/transaction-repository";
import { TransactionModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/transaction-pg";
import { AddTransactionParams } from "@/domain/entities/transaction";

export class TransactionPgRepositoryAdapter implements ITransactionRepository {
    async createTransaction(data: AddTransactionParams): Promise<any> {
        return await TransactionModelPg.create(data);
    }

    async completeTransaction(userId: number, bookId: number): Promise<void> {
        const transaction = await TransactionModelPg.findOne({ where: { userId, bookId, returnDate: null } });
        if (transaction) {
            transaction.returnDate = new Date();
            await transaction.save();
        }
    }

    async getCurrentBorrowedBooks(userId: number): Promise<any> {
        return await TransactionModelPg.findAll({ where: { userId, returnDate: null } });
    }

    async getBorrowHistory(userId: number): Promise<any> {
        return await TransactionModelPg.findAll({ where: { userId } });
    }
}
