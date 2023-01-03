import { Controller, Get ,Post,Put,Delete} from '@nestjs/common';
// import { Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/findAll')
  getHello(): string {
    return 'This will get book'
  }
  @Post('/add')
  PostHello(): string {
    return 'This will post book'
  }
  @Delete('/delete')
  DeleteHello(): string {
    return 'This will delete book'
  }
  @Put('/update')
  PutHello(): string {
    return 'This will put book'
  }
}
