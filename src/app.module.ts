import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { BooksModule } from './books/books.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(ormconfig),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
