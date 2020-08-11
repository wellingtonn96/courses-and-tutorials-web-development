import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Request {
  title: string;
  value: number;
  type: Type;
}

enum Type {
  income = 'income',
  outcome = 'outcome',
}

function sumValuesTransaction(items: Array<Transaction>): number {
  const total = items.reduce((prev, current) => {
    return prev + current.value;
  }, 0);

  return total;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const filteredTransactionsIncome = this.transactions.filter(
      item => item.type === 'income',
    );
    const filteredTransactionsOutcome = this.transactions.filter(
      item => item.type === 'outcome',
    );

    const income = sumValuesTransaction(filteredTransactionsIncome);
    const outcome = sumValuesTransaction(filteredTransactionsOutcome);
    const total = income - outcome;

    return {
      income,
      outcome,
      total,
    };
  }

  public create({ title, value, type }: Request): Transaction {
    const transactions = new Transaction({ title, value, type });

    this.transactions.push(transactions);

    return transactions;
  }
}

export default TransactionsRepository;
