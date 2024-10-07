import { BookModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/book-pg';
import { UserModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg';
import { TransactionModelPg } from '@/infrastructure/driven-adapters/adapters/orm/sequelize/models/transaction-pg';
import bookData from './seed_book_data.json';
import userData from './seed_user_data.json';
import transactionData from './seed_transaction_data.json';
import { PgConfiguration } from "@/application/config/pg-instance";

const sequelize = PgConfiguration.getInstance().sequelize;

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced successfully.');

    const parsedBookData = bookData.map(book => ({
      ...book,
      status: book.status as 'available' | 'borrowed',
      createdAt: new Date(book.createdAt),
      updatedAt: new Date(book.updatedAt),
    }));

    const parsedUserData = userData.map(user => ({
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    }));

    const parsedTransactionData = transactionData.map(transaction => ({
      ...transaction,
      userId: transaction.user_id,
      bookId: transaction.book_id,
      borrowDate: new Date(transaction.borrow_date),
      returnDate: transaction.return_date ? new Date(transaction.return_date) : null,
      createdAt: new Date(transaction.createdAt),
      updatedAt: new Date(transaction.updatedAt),
    }));

    await BookModelPg.bulkCreate(parsedBookData);
    console.log('Seeded Books:', await BookModelPg.findAll());

    await UserModelPg.bulkCreate(parsedUserData);
    console.log('Seeded Users:', await UserModelPg.findAll());

    await TransactionModelPg.bulkCreate(parsedTransactionData);
    console.log('Seeded Transactions:', await TransactionModelPg.findAll());

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();