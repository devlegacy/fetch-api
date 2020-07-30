export class HttpClient {
  get(url: string): Promise<any> {
    return HttpClient.configureRequest(url, 'GET');
  }

  post(url: string, body: object | null): Promise<any> {
    return HttpClient.configureRequest(url, 'POST');
  }

  static configureRequest(
    url: string,
    method: string,
    body: object | null = null
  ): Promise<any> {
    return fetch(url, { method }).then((response: Response) => response.json());
  }
}
