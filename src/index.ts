import { TodoService } from './services/todo.service';
import { Post } from './models/post';

class App {
  public posts: Array<Post> = [];

  start(): void {
    console.log('>> Start app');

    new TodoService().getAll().then((posts: Array<Post>) => {
      this.posts = posts;
      this.posts.forEach((post: Post) => {
        console.log(post.id);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App().start();
});
