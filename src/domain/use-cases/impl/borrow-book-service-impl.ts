import { Service, Adapter } from "@tsclean/core";
import { IBorrowBookService } from "@/domain/use-cases/borrow-book-service";
import { IBookRepository, BOOK_REPOSITORY } from "@/domain/entities/contracts/book-repository";
import { ITransactionRepository, TRANSACTION_REPOSITORY } from "@/domain/entities/contracts/transaction-repository";
import { AddTransactionParams } from "@/domain/entities/transaction";

@Service()
export class BorrowBookServiceImpl implements IBorrowBookService {
  constructor(
    @Adapter(BOOK_REPOSITORY) private readonly bookRepository: IBookRepository,
    @Adapter(TRANSACTION_REPOSITORY) private readonly transactionRepository: ITransactionRepository
  ) {}

  async borrowBook(userId: number, bookId: number): Promise<any> {
    try {
      const book = await this.bookRepository.getBookById(bookId);

      if (!book) {
        console.error(`Book with id ${bookId} not found`);
        throw new Error('Book not found');
      }

      if (book.status !== 'available') {
        console.error(`Book with id ${bookId} is already borrowed`);
        throw new Error('Book is unavailable');
      }

      const transaction: AddTransactionParams = {
        userId,
        bookId,
        borrowDate: new Date(),
        returnDate: null
      };

      await this.bookRepository.updateBookStatus(bookId, 'borrowed');
      console.log('Creating transaction:', transaction);
      return this.transactionRepository.createTransaction(transaction);

    } catch (error) {
      console.error('Error in borrowBook:', error);
      throw new Error(error.message || 'Failed to borrow book');
    }
  }
}
