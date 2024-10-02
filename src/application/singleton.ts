import { PgConfiguration } from "@/application/config/pg-instance";
import { PgConfiguration } from "@/application/config/pg-instance";
import { PgConfiguration } from "@/application/config/pg-instance";

/**
   * This array has all the singleton instances of the application
   */
export const singletonInitializers: Array<() => Promise<void>> = [
    async () =>
    {
        const pgConfig = PgConfiguration.getInstance();
        await pgConfig.managerConnectionPg();
    },
    async () =>
    {
        const pgConfig = PgConfiguration.getInstance();
        await pgConfig.managerConnectionPg();
    },
    async () =>
    {
        const pgConfig = PgConfiguration.getInstance();
        await pgConfig.managerConnectionPg();
    },

];
