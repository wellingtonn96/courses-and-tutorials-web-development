import { getRepository, In } from 'typeorm';
import { loadCSV, removeCSVFile } from '../utils/loadCSV';
import Category from '../models/Category';
import Transaction from '../models/Transaction';

class ImportTransactionsService {
  async execute(pathFile: string): Promise<Transaction[]> {
    const categoriesRepository = getRepository(Category);
    const transactionRepository = getRepository(Transaction);

    const data = await loadCSV(pathFile);

    const categories: string[] = [];

    data.map(item => categories.push(item[3]));

    const existsCategories = await categoriesRepository.find({
      where: {
        title: In(categories),
      },
    });

    const existentTitleCategories = existsCategories.map(
      (item: Category) => item.title,
    );

    const addCategoryThatNotExists = categories
      .filter(category => !existentTitleCategories.includes(category))
      .filter((value, index, self) => self.indexOf(value) === index);

    const newCategories = categoriesRepository.create(
      addCategoryThatNotExists.map(category => ({
        title: category,
      })),
    );

    await categoriesRepository.save(newCategories);

    const finalCategories = [...newCategories, ...existsCategories];

    const createTransaction = transactionRepository.create(
      data.map(transaction => ({
        title: transaction[0],
        type: transaction[1],
        value: transaction[2],
        category: finalCategories.find(
          category => category.title === transaction[3],
        ),
      })),
    );

    await transactionRepository.save(createTransaction);

    await removeCSVFile(pathFile);

    return createTransaction;
  }
}

export default ImportTransactionsService;
