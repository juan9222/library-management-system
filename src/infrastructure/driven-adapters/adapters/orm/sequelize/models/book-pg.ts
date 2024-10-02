import { Table, Column, Model, Sequelize } from 'sequelize-typescript'
import { BookEntity } from "@/domain/entities/book";

@Table({ tableName: 'books' })
export class BookModelPg extends Model<BookEntity> {
    // Implementation
}