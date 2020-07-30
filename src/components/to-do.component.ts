import { ToDoService } from '../services/to-do.service';

export class ToDoComponent {
  private posts: Array<Post> = [];
  constructor(private toDoService: ToDoService = new ToDoService()) {}
  render(): void {
    this.toDoService.getAll().then((posts: Array<Post>) => {
      this.posts = posts;
      this.posts.forEach((post: Post) => {
        console.log(post.id);
        document.getElementById('to-do-container');
      });
    });
  }
}
