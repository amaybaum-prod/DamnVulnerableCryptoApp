import ApiRequest from "../Common/ApiRequest";

export interface IAccessResponse {
  granted: boolean;
  token: string;
}

export interface IAdminResponse {
  success: boolean;
  flag: string;
}

export class ByteAtATimeService {

  private static STORAGE_KEY = "byte-at-a-time-token";
  public static CHALLENGEPATh = `/aes/ecb/byte-at-a-time`;


  public static async askPermission(): Promise<IAccessResponse> {

    const path = `${ByteAtATimeService.CHALLENGEPATh}/request-access`;
    const params: any = { method: 'post', headers: { 'username': 'KeepingitFake' } };

    return ApiRequest.do(path, params);
  }

  public static async adminLogin(password: string): Promise<IAdminResponse> {

    const path = `${ByteAtATimeService.CHALLENGEPATh}/admin`;
    const params: any = { method: 'post', headers: { "Authorization": `Basic ${btoa(`admin:${password}`)}` } };

    return ApiRequest.do(path, params);
  }



}