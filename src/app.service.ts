import { Injectable } from '@nestjs/common';

export type Status = {
  status: string;
  timestamp: string;
  uptime: number;
};

@Injectable()
export class AppService {
  getStatus(): Status {
    return {
      status: 'online',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
