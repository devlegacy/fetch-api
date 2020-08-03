import { HttpClient } from '../utils/http-client';
import { ApiConfig } from '../config/api-config';

export class ToDoService {
  private http: HttpClient;
  private serviceURL: string = `${ApiConfig.BASE_URL}/todos/`;

  constructor() {
    this.http = new HttpClient();
  }

  getAll(limit: number = 20): Promise<Array<Post>> {
    return this.http.get(`${this.serviceURL}?_limit=${limit}`);
  }

  find() {}

  create() {}

  update() {}

  destroy() {}
}
