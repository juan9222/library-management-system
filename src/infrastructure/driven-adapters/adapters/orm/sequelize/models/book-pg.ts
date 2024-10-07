import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { BookEntity } from "@/domain/entities/book";

@Table({ tableName: 'books', timestamps: true  })
export class BookModelPg extends Model<BookEntity> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  author!: string;

  @Column({ type: DataType.ENUM('available', 'borrowed'), allowNull: false })
  status!: 'available' | 'borrowed';

  @Column({ type: DataType.DATE })
  createdAt!: Date;

  @Column({ type: DataType.DATE })
  updatedAt!: Date;
}
