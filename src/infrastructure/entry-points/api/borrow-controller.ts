import { Mapping, Post, Body, Adapter } from "@tsclean/core";
import { IBorrowBookService, BORROW_BOOK_SERVICES } from "@/domain/use-cases/borrow-book-service";

@Mapping('api/v1/borrow')
export class BorrowController {
    constructor(
        @Adapter(BORROW_BOOK_SERVICES) private readonly borrowBookService: IBorrowBookService
    ) {}

    @Post()
    async borrowBook(@Body() borrowRequest: { userId: number, bookId: number }): Promise<any> {
        try {
            await this.borrowBookService.borrowBook(borrowRequest.userId, borrowRequest.bookId);
            return { message: 'Book borrowed successfully' };
        } catch (error) {
            return { message: error.message };
        }
    }
}