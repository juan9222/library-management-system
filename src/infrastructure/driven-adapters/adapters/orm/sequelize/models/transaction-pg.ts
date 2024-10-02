import { Table, Column, Model, Sequelize } from 'sequelize-typescript'
import { TransactionEntity } from "@/domain/entities/transaction";

@Table({ tableName: 'transactions' })
export class TransactionModelPg extends Model<TransactionEntity> {
    // Implementation
}