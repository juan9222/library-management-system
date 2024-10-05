export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserRepository {
    findUserById(userId: number): Promise<any>;
}
