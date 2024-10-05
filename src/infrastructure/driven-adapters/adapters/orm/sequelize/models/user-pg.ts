import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { UserEntity } from "@/domain/entities/user";

@Table({ tableName: 'users' })
export class UserModelPg extends Model<UserEntity> {
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;
}