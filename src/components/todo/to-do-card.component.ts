import { ToDoService } from '../../services/to-do.service';
import { RenderedComponent } from '../../core/components/rendered-component';
import { ComponentOption } from '../../core/options/component-option';
import { Post } from '../../models/post';
import { BaseComponent } from '../../core/components/base-component';

export function handlerClick(e: MouseEvent) {
  const $target = <HTMLElement>e.target;
  const $todo = $target.querySelector<HTMLElement>('.content') || $target;
  // console.log($todo, $todo.contentEditable);
  if ($todo.contentEditable === 'true') {
    return false;
  }
  $todo.contentEditable = 'true';
  $todo.classList.add('px-4', 'py-4');
  $todo.focus();
  $todo.addEventListener('blur', (e) => {
    console.log(e);
    $todo.classList.remove('px-4', 'py-4');
    $todo.contentEditable = 'false';
  });
}

export class ToDoCardComponent
  extends BaseComponent
  implements RenderedComponent {
  private posts: Array<Post> = [];
  constructor(
    options: ComponentOption,
    private toDoService: ToDoService = new ToDoService()
  ) {
    super(options);
  }

  private template(): string {
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
              <a href="#" class="card-footer-item">
                <button class="button is-danger">
                  <span class="icon is-small">
                    <i class="fas fa-trash"></i>
                  </span>
                  <span class="btn-delete-todo">
                    Delete
                  </span>
                </button>
              </a>
            </footer>
          </article>
        </div>
      `;
    });
    return template;
  }

  private handlerToDoCardActions($element: HTMLDivElement): void {
    const $todoContents = $element.querySelectorAll<HTMLDivElement>(
      '.card-content'
    );
    $todoContents.forEach(($todo: HTMLDivElement) => {
      $todo.addEventListener('click', handlerClick);
    });
  }

  render(): void {
    const $element: HTMLDivElement | null = document.querySelector(
      this.selector
    );
    if ($element) {
      this.toDoService.getAll().then((posts: Array<Post>) => {
        this.posts = posts;
        super.render({ data: this.template() });
        this.handlerToDoCardActions($element);
      });
    }
  }

  // private deleteToDo($todo: HTMLElement) {
  //   const post: Post = JSON.parse(<string>$todo.dataset.post);
  //   this.toDoService.destroy(post);
  //   $todo.closest('div.column')?.remove();
  // }
}
