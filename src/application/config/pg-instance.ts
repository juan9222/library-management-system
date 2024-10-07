import { Sequelize } from "sequelize-typescript";

import { Logger } from "@tsclean/core";
import { CONFIG_PG } from "@/application/config/environment";
import { TransactionModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/transaction-pg";
import { BookModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/book-pg";
import { UserModelPg } from "@/infrastructure/driven-adapters/adapters/orm/sequelize/models/user-pg";


/**
 * Class that generates a connection instance for Pg using the Singleton pattern
 */
export class PgConfiguration {
  private logger: Logger;
  private static instance: PgConfiguration;

  public sequelize: Sequelize;

  private constructor() {
    this.logger = new Logger(PgConfiguration.name);
    this.sequelize = new Sequelize(
      CONFIG_PG.database,
      CONFIG_PG.user,
      CONFIG_PG.password,
      {
        host: CONFIG_PG.host,
        dialect: "postgres",
        // This array contains all the system models that are used for Pg.
        models: [
          BookModelPg,
          UserModelPg,
          TransactionModelPg
        ]
      }
    );
  }

  public static getInstance(): PgConfiguration {
    if (!PgConfiguration.instance) {
      PgConfiguration.instance = new PgConfiguration();
    }
    return PgConfiguration.instance;
  }

  public async managerConnectionPg(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      this.logger.log(`Connected to database: ${CONFIG_PG.database}`);
      
      await this.sequelize.sync({ force: false });
      this.logger.log('Sequelize models synchronized');
    } catch (error) {
      this.logger.error("Failed to connect or sync with Pg", error);
    }
}
}
