import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feature1 } from './feature1.module';
import { Feature2 } from './feature2.module';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [Feature1,Feature2],
  controllers: [AppController, ItemsController],
  providers: [AppService],
  exports : []
})
export class OrderModule {
  constructor(){
    console.log('order module')
  }
}
