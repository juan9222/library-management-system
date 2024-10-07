import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { UserEntity } from "@/domain/entities/user";

@Table({ tableName: 'users', timestamps: true }) 
export class UserModelPg extends Model<UserEntity> {

    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;

    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    createdAt: Date;

    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    updatedAt: Date;
}
