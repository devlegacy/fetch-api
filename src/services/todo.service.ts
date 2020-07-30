import { HttpClient } from '../utils/http-client';
import { ApiConfig } from '../config/api-config';

export class TodoService {
  private http: HttpClient;
  private serviceURL: string = `${ApiConfig.BASE_URL}/todos/`;

  constructor() {
    this.http = new HttpClient();
  }

  getAll() {
    return this.http.get(this.serviceURL);
  }

  find() {}

  create() {}

  update() {}

  destroy() {}
}
