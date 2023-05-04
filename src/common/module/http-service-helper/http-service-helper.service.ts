import { catchError, firstValueFrom } from "rxjs";
import { AxiosError } from "axios";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { iLogger } from "../../utils/logger/iLogger";
import { error } from "winston";

@Injectable()
export class HttpServiceHelper{

  constructor(
    private readonly logger: iLogger,
    private readonly httpService: HttpService,
  ) {
  }

  async common_get(url, headers?){
    let defaultHeaders = {
      "content-type": "application/json",
    }

    let { data } = await firstValueFrom(this.httpService.get(url, {
      headers: headers ? headers : defaultHeaders
    }).pipe(
      catchError((error: AxiosError) => {
        console.log(error.response)
        throw error;
      })
    ))
    return data
  }

  async common_post(url, body, headers?) {
    console.log(url)
    console.log(body)
    let defaultHeaders = {
      "content-type": "application/json",
    }

    let {data} = await firstValueFrom(this.httpService.post(url, body, {
      headers: headers ? headers : defaultHeaders
    }).pipe(
      catchError((error: AxiosError) => {
        throw error;
      })
    ))

    return data

  }
}