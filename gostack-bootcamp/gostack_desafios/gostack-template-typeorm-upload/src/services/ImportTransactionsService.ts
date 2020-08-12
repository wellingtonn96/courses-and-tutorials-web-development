import Transaction from '../models/Transaction';
import { loadCSV } from '../utils/loadCSV';
import CreateTransactionService from './CreateTransactionService';

class ImportTransactionsService {
  async execute(pathFile: string): Promise<Transaction[]> {
    const createTransaction = new CreateTransactionService();
    const data = await loadCSV(pathFile);

    const promises = data.map(item =>
      createTransaction.execute({
        title: item[0],
        type: item[1],
        value: item[2],
        category: item[3],
      }),
    );

    const transactions = await Promise.all(promises);

    return transactions;
  }
}

export default ImportTransactionsService;
