import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
// Http endpoints
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData() {
    return this.appService.getData();
  }

  @Post('addTodo')
  addTodo() {
    return this.appService.addTodo();
  }
}
