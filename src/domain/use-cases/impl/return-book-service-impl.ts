import { Service, Adapter } from "@tsclean/core";
import { IReturnBookService } from "@/domain/use-cases/return-book-service";
import { IBookRepository, BOOK_REPOSITORY } from "@/domain/entities/contracts/book-repository";
import { ITransactionRepository, TRANSACTION_REPOSITORY } from "@/domain/entities/contracts/transaction-repository";

@Service()
export class ReturnBookServiceImpl implements IReturnBookService {
  constructor(
    @Adapter(BOOK_REPOSITORY) private readonly bookRepository: IBookRepository,
    @Adapter(TRANSACTION_REPOSITORY) private readonly transactionRepository: ITransactionRepository
  ) {}

  async returnBook(userId: number, bookId: number): Promise<any> {
    const book = await this.bookRepository.getBookById(bookId);

    if (!book || book.status === 'available') {
      throw new Error('Book is not currently borrowed');
    }

    await this.bookRepository.updateBookStatus(bookId, 'available');
    return this.transactionRepository.completeTransaction(userId, bookId);
  }
}
