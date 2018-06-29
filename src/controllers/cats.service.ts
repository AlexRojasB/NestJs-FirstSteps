import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCats(): string[] {
    return ['Hello World!', 'Manchitas'];
  }
}
