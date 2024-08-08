import axios from 'axios';
import { APIEndpoints, SendSMSResponse } from './types';

export class Client {
    baseUrl:string = 'https://www.useneno.online/v1'
    apiKey: string;
    constructor(baseUrl: string, apiKey: string){
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }
  private async makeRequest (
    method: string, body: any, endpoint: APIEndpoints
  ) {
    try {
      const response = await axios({
        url: `${this.baseUrl}${endpoint}`,
        method,
        data: body,
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey }
      })
      console.log(response)
      const data = await response.data
      return data
    } catch (err) {
        if(err instanceof Error){
          console.error(err)
            throw new Error(err.name)
        }
      throw new Error('There was an error sending a request to Neno')
    }
  }

  public async sendSMS (
    message: string,
    recipients: string[]
    ): Promise<SendSMSResponse> {
    const body = {
      message,
      recipients
    }
    return await this.makeRequest('POST', body, APIEndpoints.SEND_SMSM)
  }
}
