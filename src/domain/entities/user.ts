export type UserEntity = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export type AddUserParams = Omit<UserEntity, 'id' | 'createdAt' | 'updatedAt'>;
