enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

export class HttpClient {
  get(url: string): Promise<any> {
    return HttpClient.configureRequest(url, HttpMethod.GET);
  }

  destroy(url: string): Promise<any> {
    return HttpClient.configureRequest(url, HttpMethod.DELETE);
  }

  post(url: string, body: object): Promise<any> {
    return HttpClient.configureRequest(url, HttpMethod.POST, body);
  }

  update(url: string, body: object): Promise<any> {
    return HttpClient.configureRequest(url, HttpMethod.PUT, body);
  }

  static async configureRequest(
    url: string,
    method: string,
    body?: object
  ): Promise<any> {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  }
}
