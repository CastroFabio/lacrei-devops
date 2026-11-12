import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Status } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/status')
  getStatus(): Status {
    return this.appService.getStatus();
  }
}
