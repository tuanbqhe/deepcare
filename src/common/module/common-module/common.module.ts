import { Module } from "@nestjs/common";
import {LoggerModule} from "../../utils/logger/iLogger.module";
import {HttpModule} from "@nestjs/axios";
import { HttpServiceHelperModule } from "../http-service-helper/http-service-helper.module";

@Module({
    imports: [
        LoggerModule,
        HttpModule,
        HttpServiceHelperModule
    ],
    exports: [
      LoggerModule,
      HttpModule,
      HttpServiceHelperModule
    ]
})
export class iCommonModule{}