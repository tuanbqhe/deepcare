import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";

class ErrorExtensionDto {
    @ApiProperty()
    statusCode?: number

    @ApiProperty()
    error_code?: any

    @ApiProperty()
    message?: any

    @ApiProperty()
    error?: any
}

export class ErrorFormatDto{
    @ApiProperty()
    statusCode: number

    @ApiProperty()
    timestamp: Date

    @ApiProperty()
    path: string

    @ApiProperty()
    message: string

    @ApiProperty({
        type: ErrorExtensionDto
    })
    @Type(() => ErrorExtensionDto)
    extend?: ErrorExtensionDto
}
