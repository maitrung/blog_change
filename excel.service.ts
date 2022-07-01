import { Injectable,BadRequestException,NotFoundException } from '@nestjs/common';
import { Workbook } from 'exceljs';
import * as tmp from 'tmp';
import { data } from './data';


@Injectable()
export class ExcelService {
    async downloadExcel(){
        if(!data){
            throw new NotFoundException("not data to dowload");
        }
        let rows =[];
        data.forEach(doc=>{
            rows.push(Object.values(doc))
        })
        let book = new Workbook();
        let sheet = book.addWorksheet('sheet1');
        rows.unshift(Object.keys(data[0]));
        sheet.addRows(rows);
        let File = await new Promise((resolve,rejects)=>{
            tmp.file({discardDescriptor:true,pefix:'MyExcelSheet',postfix:'.xlsx', mode:parseInt('0600',8)},async(err,file)=>{
                if(err){
                    book.xlsx.writeFile(file).then(_=>{
                        resolve(file)
                    }).catch(err=>{
                        throw new BadRequestException(err)
                    })
                    return File;
                }
            })
        })
    }
    
}
