import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This will be Toutube API';
  }

  sayHello(): string {
    return 'I say Toutube';
  }
}
