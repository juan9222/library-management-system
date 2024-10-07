import { IBookRepository } from "@/domain/entities/contracts/book-repository";
import { BookModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/book-pg";
import { BookEntity, AddBookParams } from "@/domain/entities/book";

export class BookPgRepositoryAdapter implements IBookRepository {
    async createBook(data: AddBookParams): Promise<BookEntity> {
        const book = await BookModelPg.create(data);
        return this.toBookEntity(book);
    }

    async getBooks(): Promise<BookEntity[]> {
        const books = await BookModelPg.findAll();
        return books.map(book => this.toBookEntity(book));
    }

    async getBookById(id: number): Promise<BookEntity | null> {
        const book = await BookModelPg.findByPk(id);
        return book ? this.toBookEntity(book) : null;
    }

    async updateBookStatus(id: number, status: 'borrowed' | 'available'): Promise<void> {
        const book = await BookModelPg.findByPk(id);
        if (book) {
            book.status = status;
            await book.save();
        }
    }

    // Helper to map Sequelize model to domain entity
    private toBookEntity(book: BookModelPg): BookEntity {
        return {
            id: book.id,
            title: book.title,
            author: book.author,
            status: book.status as "available" | "borrowed",
            createdAt: book.createdAt,
            updatedAt: book.updatedAt
        };
    }
}
