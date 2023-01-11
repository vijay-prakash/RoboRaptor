import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramService {
  getTele(): string {
    return 'Hello Tele!';
  }
}
