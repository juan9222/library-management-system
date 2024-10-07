import { Mapping, Get, Param, Adapter } from "@tsclean/core";
import { ITransactionHistoryService, TRANSACTION_HISTORY_SERVICES } from "@/domain/use-cases/transaction-history-service";

@Mapping('api/v1/users/')
export class UsersController {
    constructor(
        @Adapter(TRANSACTION_HISTORY_SERVICES) private readonly transactionHistoryService: ITransactionHistoryService
    ) {}

    @Get(':id/borrowed-books')
    async getBorrowedBooks(@Param("id") userId: string): Promise<any> {
        return this.transactionHistoryService.getBorrowedBooks(Number(userId));
    }

    @Get(':id/history')
    async getUserHistory(@Param("id") userId: string): Promise<any> {
        return this.transactionHistoryService.getUserHistory(Number(userId));
    }
}
