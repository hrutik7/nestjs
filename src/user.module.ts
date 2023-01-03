import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feature3 } from './feature3.module';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [Feature3],
  controllers: [AppController, ItemsController],
  providers: [AppService],
  exports : []
})
export class UserModule {
  constructor(){
    console.log('user module')
  }
}
