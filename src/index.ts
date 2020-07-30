import { ToDoService } from './services/to-do.service';
import { Post } from './models/post';
import { NavBarComponent } from './components/nav-bar.component';

class App {
  public posts: Array<Post> = [];

  start(): void {
    console.log('>> Start app');
    new NavBarComponent();

    new ToDoService().getAll().then((posts: Array<Post>) => {
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
