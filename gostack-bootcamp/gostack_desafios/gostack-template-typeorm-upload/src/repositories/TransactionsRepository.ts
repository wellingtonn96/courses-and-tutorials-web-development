import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

function sumValuesTransaction(items: Array<Transaction>): number {
  const total = items.reduce((prev, current) => {
    const value = parseFloat(current.value.toString());
    return prev + value;
  }, 0);

  return total;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const findIncomeTransactions = await this.find({
      where: { type: 'income' },
    });
    const findOutcomeTransactions = await this.find({
      where: { type: 'outcome' },
    });

    const income = sumValuesTransaction(findIncomeTransactions);
    const outcome = sumValuesTransaction(findOutcomeTransactions);
    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }
}

export default TransactionsRepository;
