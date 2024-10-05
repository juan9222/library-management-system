export type BookEntity = {
    id: number;
    title: string;
    author: string;
    status: 'available' | 'borrowed'; 
    createdAt: Date;
    updatedAt: Date; 
}

export type AddBookParams = Omit<BookEntity, 'id' | 'createdAt' | 'updatedAt'>;
