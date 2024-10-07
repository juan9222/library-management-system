import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { TransactionEntity } from "@/domain/entities/transaction";
import { UserModelPg } from './user-pg';
import { BookModelPg } from './book-pg';

@Table({ tableName: 'transactions', timestamps: true })
export class TransactionModelPg extends Model<TransactionEntity> {
    @Column({ 
        type: DataType.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => UserModelPg)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @ForeignKey(() => BookModelPg)
    @Column({ type: DataType.INTEGER, allowNull: false })
    bookId: number;

    @Column({ type: DataType.DATE, allowNull: false })
    borrowDate: Date;

    @Column({ type: DataType.DATE, allowNull: true })
    returnDate: Date | null;
}
