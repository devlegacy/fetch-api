import { ToDoService } from '../../services/to-do.service';
import { RenderedComponent } from '../../core/components/rendered-component';
import { ComponentOption } from '../../core/options/component-option';
import { Post } from '../../models/post';
import { BaseComponent } from '../../core/components/base-component';

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

  private getToDoTitle($element: HTMLDivElement): HTMLDivElement {
    return $element.querySelector<HTMLDivElement>('.content') || $element;
  }

  private handlerTitleClick(e: MouseEvent) {
    const $target = <HTMLDivElement>e.target;
    const $title = this.getToDoTitle($target);
    if ($target.classList.contains('card-content')) {
      if ($title.contentEditable === 'true') {
        e.preventDefault();
        $title.classList.remove('px-4', 'py-4');
        $title.contentEditable = 'false';
        return;
      }
    }
    if ($title.contentEditable === 'true') {
      return;
    }
    $title.contentEditable = 'true';
    $title.classList.add('px-4', 'py-4');
    $title.focus();
  }

  private handlerTitleBlur(e: FocusEvent) {
    const $title = <HTMLDivElement>e.target;
    const $todoCard = $title.closest('.card-content');

    const post: Post = JSON.parse(<string>$title.dataset.post);
    post.title = $title.innerText;

    $todoCard?.classList.add('has-background-warning');
    $title.classList.remove('px-4', 'py-4');
    $title.contentEditable = 'false';
    this.toDoService.update(post).then(() => {
      $todoCard?.addEventListener(
        'click',
        (e: any) => this.handlerTitleClick(e),
        {
          once: true,
        }
      );
      $todoCard?.classList.remove('has-background-warning');
    });

    return;
  }

  private handlerToDoCardActions($todoCards: NodeListOf<HTMLDivElement>): void {
    $todoCards.forEach(($todoCard: HTMLDivElement) => {
      const $title = this.getToDoTitle($todoCard);
      const $btnDelete = $todoCard
        .closest('.card')
        ?.querySelector<HTMLButtonElement>('button');

      $todoCard.addEventListener('click', (e) => this.handlerTitleClick(e), {
        once: true,
      });
      $title.addEventListener('blur', (e) => this.handlerTitleBlur(e));
      $btnDelete!.addEventListener('click', (e) => this.deleteToDo(e));
    });
  }

  public render(): void {
    const $todoContainer = document.querySelector<HTMLDivElement>(
      this.selector
    );

    if (!$todoContainer) {
      return;
    }

    this.toDoService.getAll().then((posts: Array<Post>) => {
      this.posts = posts;
      super.render({ data: this.template() });
      const $todoCards = $todoContainer.querySelectorAll<HTMLDivElement>(
        '.card-content'
      );
      this.handlerToDoCardActions($todoCards);
    });
  }

  private deleteToDo(e: MouseEvent) {
    const $target = <HTMLElement>e.target;
    const $btn = $target.closest('button');
    const $todo = $target
      .closest('article')
      ?.querySelector<HTMLDivElement>('.content') as HTMLDivElement;
    const post: Post = JSON.parse(<string>$todo.dataset.post);
    $btn!.disabled = true;
    this.toDoService.destroy(post).then(() => {
      $todo.closest('div.column')?.remove();
    });
  }
}
