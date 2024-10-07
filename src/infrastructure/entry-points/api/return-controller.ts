import { Mapping, Post, Body, Adapter } from "@tsclean/core";
import { IReturnBookService, RETURN_BOOK_SERVICES } from "@/domain/use-cases/return-book-service";

@Mapping('api/v1/return')
export class ReturnController {
    constructor(
        @Adapter(RETURN_BOOK_SERVICES) private readonly returnBookService: IReturnBookService
    ) {}

    @Post()
    async returnBook(@Body() returnRequest: { userId: number, bookId: number }): Promise<any> {
        try {
            await this.returnBookService.returnBook(returnRequest.userId, returnRequest.bookId);
            return { message: 'Book returned successfully' };
        } catch (error) {
            return { message: error.message };
        }
    }
}
