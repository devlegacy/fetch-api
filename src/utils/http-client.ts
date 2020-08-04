export class HttpClient {
  get(url: string): Promise<any> {
    return HttpClient.configureRequest(url, 'GET');
  }

  destroy(url: string): Promise<any> {
    return HttpClient.configureRequest(url, 'DELETE');
  }

  post(url: string, body: object | null = null): Promise<any> {
    return HttpClient.configureRequest(url, 'POST');
  }

  update(url: string, body: object | null = null): Promise<any> {
    return HttpClient.configureRequest(url, 'PUT', body);
  }

  static configureRequest(
    url: string,
    method: string,
    body: object | null = null
  ): Promise<any> {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    }).then((response: Response) => response.json());
  }
}
