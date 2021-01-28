import { HttpClient } from '../utils/http-client';
import { ApiConfig } from '../config/api-config';
import { Post } from '../models/post';

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

  create(post: Post) {
    return this.http.post(`${this.serviceURL}`, post);
  }

  update(post: Post) {
    return this.http.update(`${this.serviceURL}${post.id}`, post);
  }

  destroy(post: Post) {
    return this.http.destroy(`${this.serviceURL}${post.id}`);
  }
}
