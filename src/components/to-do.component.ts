import { ToDoService } from '../services/to-do.service';
import { RenderedComponent } from '../core/components/rendered-component';
import { ComponentOption } from '../core/options/component-option';

export class ToDoComponent implements RenderedComponent {
  private posts: Array<Post> = [];
  constructor(
    private options: ComponentOption,
    private toDoService: ToDoService = new ToDoService()
  ) {}

  render(): void {
    const $element = document.querySelector(this.options.selector);

    this.toDoService.getAll().then((posts: Array<Post>) => {
      this.posts = posts;
      $element!.innerHTML = this.template();

      // Edit text
      $element?.addEventListener('click', (e: Event) => {
        const target = <HTMLElement>e.target;
        if (target.classList.value.includes('content')) {
          // console.log(target);
          const $todo: HTMLElement | null =
            target.querySelector('.content') || target;
          this.updateToDo($todo);
        } else if (target.classList.value.startsWith('card-footer-item')) {
          e.preventDefault();
          const $todo: HTMLElement = <HTMLElement>(
            target.closest('article')?.querySelector('.content')
          );
          this.deleteToDo($todo);
        }
      });
    });
  }

  template(): string {
    let template: string = '';
    this.posts.forEach((post: Post) => {
      template += `
        <div class="column is-12">
          <article class="card">
            <div class="card-content">
              <div  class="content"
                    data-id="${post.id}"
                    data-title="${post.title}"
                    data-post='${JSON.stringify(post)}'>
                ${post.title}
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </article>
        </div>
      `;
    });
    return template;
  }

  updateToDo($todo: HTMLElement) {
    $todo!.addEventListener(
      'blur',
      (e: Event) => {
        const target: HTMLElement = <HTMLElement>e.target;
        // console.dir(target.innerText);
        // console.dir(target.dataset.id);
        // console.dir(JSON.parse(<string>target.dataset.post));
        const post: Post = JSON.parse(<string>target.dataset.post);
        post.title = target.innerText;
        this.toDoService.update(post);

        target.classList.remove('px-4', 'py-4');
        target.contentEditable = 'false';
      },
      {
        once: true,
      }
    );
    $todo!.classList.add('px-4', 'py-4');
    $todo!.contentEditable = 'true';
    $todo!.focus();
  }

  deleteToDo($todo: HTMLElement) {
    const post: Post = JSON.parse(<string>$todo.dataset.post);
    this.toDoService.destroy(post);
    $todo.closest('div.column')?.remove();
  }
}
