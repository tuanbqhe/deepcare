// import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
// import * as xlsx from 'xlsx';

// @Injectable()
// export class ParseXlsxPipe implements PipeTransform<Express.Multer.File> {
//     transform(file: Express.Multer.File, metadata: ArgumentMetadata){
//         if(!file) throw new BadRequestException('No file found!')
//         let originFileName = file.originalname.split(".")
//         if(!originFileName.length || originFileName.length < 2) throw new BadRequestException('Extension invalid')
//         if(originFileName.pop() !== 'xlsx') throw new BadRequestException('Invalid extension xlsx')

//         let finalObject = {}

//         let data = xlsx.read(file.buffer, {type: "buffer"})

//         data.SheetNames.forEach(sheetName => {
//             finalObject[sheetName] = xlsx.utils.sheet_to_json(data.Sheets[sheetName]);
//         });

//         return finalObject
//     }
// }
