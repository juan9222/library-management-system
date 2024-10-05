import { IUserRepository } from "@/domain/entities/contracts/user-repository";
import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";
import { UserEntity, AddUserParams } from "@/domain/entities/user";

export class UserPgRepositoryAdapter implements IUserRepository {

    async createUser(data: AddUserParams): Promise<UserEntity> {
        const user = await UserModelPg.create(data);
        return user.get({ plain: true }) as UserEntity; 
    }

    async findUserById(id: number): Promise<UserEntity | null> {
        const user = await UserModelPg.findByPk(id);
        return user ? user.get({ plain: true }) as UserEntity : null;
    }
}
