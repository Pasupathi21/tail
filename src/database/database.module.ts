import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

console.log('env', process.env.DB_URL);

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL)],
})
export class DatabaseModule implements OnModuleInit {
  onModuleInit() {
    //
  }
}
