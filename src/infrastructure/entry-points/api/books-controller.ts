import { Mapping, Get, Adapter } from "@tsclean/core";
import { IBookRepository, BOOK_REPOSITORY } from "@/domain/entities/contracts/book-repository";
import { BookEntity } from "@/domain/entities/book";

@Mapping('api/v1/books')
export class BooksController {
    constructor(
        @Adapter(BOOK_REPOSITORY) private readonly bookRepository: IBookRepository
    ) {}

    @Get()
    async getBooks(): Promise<BookEntity[]> {
        return this.bookRepository.getBooks();
    }
}
