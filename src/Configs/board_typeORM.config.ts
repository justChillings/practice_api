import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const board_typeORM : TypeOrmModuleOptions = {
  type : 'postgres',
  host : 'localhost',
  port : 9802,
  username : 'guest',
  password : 'chacha',
  database : 'board-app',
  entities : [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
}