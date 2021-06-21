const { SnakeNamingStrategy } = require('typeorm-naming-strategies');
const snake = new SnakeNamingStrategy();
module.exports = {
  logging: true,
  type: 'mysql',
  host: process.env.READABLE_RDS_HOST,
  port: 3306,
  charset: 'utf8mb4',
  username: process.env.READABLE_RDS_USERNAME,
  password: process.env.READABLE_RDS_PASSWORD,
  database: process.env.READABLE_RDS_DB,
  entities: ['./dist/entities/*.js'],
  migrations: ['./src/migrations/*.ts'],
  namingStrategy: snake,
  dateStrings: ['DATE'],
  cli: {
    migrationsDir: './src/migrations',
  },
  synchronize: true,
};
