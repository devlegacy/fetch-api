enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

export class HttpClient {
  get<T>(url: string): Promise<T> {
    return HttpClient.configureRequest(url, HttpMethod.GET);
  }

  destroy<T>(url: string): Promise<T> {
    return HttpClient.configureRequest(url, HttpMethod.DELETE);
  }

  post<T>(url: string, body: object): Promise<T> {
    return HttpClient.configureRequest(url, HttpMethod.POST, body);
  }

  update<T>(url: string, body: object): Promise<T> {
    return HttpClient.configureRequest<T>(url, HttpMethod.PUT, body);
  }

  static async configureRequest<T>(url: string, method: string, body?: object): Promise<T> {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json;charset=utf-8',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    return await response.json();
  }
}
