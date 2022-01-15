import { HttpClient } from '../modules/http-client';
import { ApiConfig } from '../config/api-config';
import { Post } from '../models/post';

export class ToDoService {
  private http: HttpClient;
  private serviceURL: string = `${ApiConfig.BASE_URL}/todos/`;

  constructor() {
    this.http = new HttpClient();
  }

  getAll(limit: number = 20) {
    return this.http.get<Array<Post>>(`${this.serviceURL}?_limit=${limit}`);
  }

  find() {}

  create(post: Post) {
    return this.http.post<Post>(`${this.serviceURL}`, post);
  }

  update(post: Post) {
    return this.http.update<Post>(`${this.serviceURL}${post.id}`, post);
  }

  destroy(post: Post) {
    return this.http.destroy<Post>(`${this.serviceURL}${post.id}`);
  }
}
