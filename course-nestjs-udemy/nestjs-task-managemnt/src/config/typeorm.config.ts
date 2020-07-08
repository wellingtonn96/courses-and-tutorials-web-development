import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mypostgres',
  database: 'tasks_db',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
