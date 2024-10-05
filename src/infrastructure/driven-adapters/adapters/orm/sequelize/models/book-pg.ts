import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { BookEntity } from "@/domain/entities/book";

@Table({ tableName: 'books' })
export class BookModelPg extends Model<BookEntity> {
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    author: string;

    @Column({ type: DataType.STRING, allowNull: false })
    status: string;
}