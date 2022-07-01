import { Controller, Get, Header, Res } from '@nestjs/common';
import { ExcelService } from './excel.service';
import {Response} from 'express'

@Controller('excel')
export class ExcelController {
    constructor(private excelService:ExcelService){}
    @Get('/download')
    @Header('content-Type','text/xlsx')
    async downloadReport(@Res() res:Response){
        let result = await this.excelService.downloadExcel();
        res.download(`${result}`);
    }
}
