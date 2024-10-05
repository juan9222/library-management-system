import { BOOK_REPOSITORY } from '@/domain/entities/contracts/book-repository';
import { TRANSACTION_REPOSITORY } from '@/domain/entities/contracts/transaction-repository';
import { USER_REPOSITORY } from '@/domain/entities/contracts/user-repository';

import { BookPgRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/book-pg-repository-adapter';
import { TransactionPgRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/transaction-pg-repository-adapter';
import { UserPgRepositoryAdapter } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/user-pg-repository-adapter';

import { BORROW_BOOK_SERVICES } from '@/domain/use-cases/borrow-book-service';
import { RETURN_BOOK_SERVICES } from '@/domain/use-cases/return-book-service';
import { TRANSACTION_HISTORY_SERVICES } from '@/domain/use-cases/transaction-history-service';

import { BorrowBookServiceImpl } from '@/domain/use-cases/impl/borrow-book-service-impl';
import { ReturnBookServiceImpl } from '@/domain/use-cases/impl/return-book-service-impl';
import { TransactionHistoryServiceImpl } from '@/domain/use-cases/impl/transaction-history-service-impl';

export const adapters = [
  {
    provide: BOOK_REPOSITORY,
    useClass: BookPgRepositoryAdapter
  },
  {
    provide: TRANSACTION_REPOSITORY,
    useClass: TransactionPgRepositoryAdapter
  },
  {
    provide: USER_REPOSITORY,
    useClass: UserPgRepositoryAdapter
  }
];

export const services = [
  {
    provide: BORROW_BOOK_SERVICES,
    useClass: BorrowBookServiceImpl
  },
  {
    provide: RETURN_BOOK_SERVICES,
    useClass: ReturnBookServiceImpl
  },
  {
    provide: TRANSACTION_HISTORY_SERVICES,
    useClass: TransactionHistoryServiceImpl
  }
];
