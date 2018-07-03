import { Injectable } from '@nestjs/common';
import { CreateCatDto } from 'DTOs/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  createCat(cat: CreateCatDto){
    this.cats.push(cat);
  }

  getCats(): string[] {
    return ['Hello World!', 'Manchitas'];
  }

  findAll(): CreateCatDto[]{
    return this.cats;
  }
}
