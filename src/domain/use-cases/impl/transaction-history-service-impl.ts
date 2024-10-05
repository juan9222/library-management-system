import { Service, Adapter } from "@tsclean/core";
import { ITransactionHistoryService } from "@/domain/use-cases/transaction-history-service";
import { ITransactionRepository, TRANSACTION_REPOSITORY } from "@/domain/entities/contracts/transaction-repository";

@Service()
export class TransactionHistoryServiceImpl implements ITransactionHistoryService {
  constructor(
    @Adapter(TRANSACTION_REPOSITORY) private readonly transactionRepository: ITransactionRepository
  ) {}

  async getBorrowedBooks(userId: number): Promise<any> {
    return this.transactionRepository.getCurrentBorrowedBooks(userId);
  }

  async getUserHistory(userId: number): Promise<any> {
    return this.transactionRepository.getBorrowHistory(userId);
  }
}
