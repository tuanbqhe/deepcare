import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { HttpServiceHelper } from "./http-service-helper.service";
import { LoggerModule } from "../../utils/logger/iLogger.module";

@Module({
  imports: [
    HttpModule,
    LoggerModule
  ],
  providers: [
    HttpServiceHelper
  ],
  exports: [HttpServiceHelper]
})
export class HttpServiceHelperModule{}