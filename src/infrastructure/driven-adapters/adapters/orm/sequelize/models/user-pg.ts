import { Table, Column, Model, Sequelize } from 'sequelize-typescript'
import { UserEntity } from "@/domain/entities/user";

@Table({ tableName: 'users' })
export class UserModelPg extends Model<UserEntity> {
    // Implementation
}