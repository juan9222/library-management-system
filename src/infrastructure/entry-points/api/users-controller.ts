import {Mapping, Get, Param} from "@tsclean/core";

@Mapping('api/v1/users/')
export class UsersController {
    constructor() {
    }

    @Get(':id/borrowed-books')
    async getBorrowedBooks(@Param("id") userId: string): Promise<any> {
        return `List of borrowed books for user ${userId}`; 
    }

    @Get(':id/history')
    async getUserHistory(@Param("id") userId: string): Promise<any> {
        return `Borrowing history for user ${userId}`; 
    }
}
