import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat.module';
import { ItemsController } from './items/items.controller';
import { OrderModule } from './orders.module';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule,ChatModule,OrderModule],
  controllers: [AppController, ItemsController],
  providers: [AppService],
  exports : []
})
export class RootModule {
  constructor(){
    console.log('App module')
  }
}
