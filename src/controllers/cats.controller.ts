import { Controller, Get, Req, Post, HttpCode, Header, Param, Body, Put, Delete, Res, HttpStatus } from "@nestjs/common";
import { Observable, of } from "rxjs";
import { CreateCatDto } from "DTOs/create-cat.dto";
import { CatsService } from "./cats.service";

@Controller('cats')
export class CatsController{
    constructor(private catService:CatsService) {}
    // @Post()
    // create(@Res() res) {
    //   res.status(HttpStatus.CREATED).send();
    // }
  
    // @Get()
    // findAll(@Res() res) {
    //    res.status(HttpStatus.OK).json([]);
    // }
    @Get()
    async findAll(): Promise<any>{
        return this.catService.getCats();
    }

    @Post()
   // @HttpCode(204)//custom http code
   // @Header('Cache-Control', 'none') //custom header response
    async create(@Body() createCatDto:CreateCatDto){
        return await this.catService.create(createCatDto);
    }

    @Get(':id')
    findOne(@Param('id') id){
        console.log(id);
        return `This action returns a #${id} cat`        
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto){
        return `This action updates a #${id} cat`
    }

    @Delete(':id')
    remove(@Param('id') id){
        return `This action updates a #${id} cat`

    }
    // @Get()
    // async findAll(): Observable<any[]>{
    //     return of([]);
    // }
    // @Get()
    // findAll(){
    //     return 'This action returns all cats';
    // }
    // @Get(':id')
    // findOne(@Param() params){
    //     console.log(params.id);
    //     return `This action returns a #${params.id} cat`        
    // }
    // @Get()
    // findAll(@Req() arg){
    //     return 'This action returns all cats';
    // }


}