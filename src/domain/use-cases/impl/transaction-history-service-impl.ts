import {Service} from "@tsclean/core";
import {ITransactionHistoryService} from "@/domain/use-cases/transaction-history-service";

@Service()
export class TransactionHistoryServiceImpl implements ITransactionHistoryService {
    constructor() {
    }
}