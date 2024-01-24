import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { board_typeORM } from './Configs/board_typeORM.config';

@Module({
  imports: [ TypeOrmModule.forRoot(board_typeORM), AuthModule ], 
})
export class AppModule {}
