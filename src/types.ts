export enum APIEndpoints{
  SEND_SMSM='/',
}

enum SendSMSStatus {
  COMPLETED='completed',
  PROCESSING='processing',
  FAILED='failed',
  REJECTED='rejected',
}
export declare interface SendSMSResponse {
  status:SendSMSStatus,
  refId:string,
}
