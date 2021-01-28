import { ComponentOption } from '../../core/options/component-option';
import { ToDoService } from '../../services/to-do.service';
import { RenderedComponent } from '../../core/components/rendered-component';
import { Post } from '../../models/post';
import { BaseComponent } from '../../core/components/base-component';

export class CreateToDoComponent
  extends BaseComponent
  implements RenderedComponent {
  constructor(
    options: ComponentOption,
    private toDoService: ToDoService = new ToDoService()
  ) {
    super(options);
  }

  private template(post: Post): string {
    return `
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
`;
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

  private handlerDeleteToDo(e: MouseEvent) {
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

  private handlerCreateToDo(e: Event) {
    e.preventDefault();
    const $form = <HTMLFormElement>e.target;
    const $button = $form.querySelector<HTMLButtonElement>('button');
    const $inpTitle = $form.querySelector<HTMLTextAreaElement>('textarea');

    $inpTitle?.closest('.control')?.classList.add('is-loading');
    $button?.classList.add('is-loading');
    $button!.disabled = true;

    const post: Post = new Post($inpTitle!.value);
    this.toDoService.create(post).then((data: Post) => {
      // post.id = data.id;
      post.id = 200;

      const $newPost = document.createElement('div');
      $newPost.classList.add('column', 'is-12');
      $newPost.innerHTML = this.template(post);
      document.querySelector('#to-do-container')?.prepend($newPost);

      const $todoCard = $newPost.querySelector<HTMLDivElement>('.card');
      if ($todoCard) {
        const $title = this.getToDoTitle($todoCard);
        const $btnDelete = $todoCard
          .closest('.card')
          ?.querySelector<HTMLButtonElement>('button');
        $todoCard.addEventListener('click', (e) => this.handlerTitleClick(e), {
          once: true,
        });
        $title.addEventListener('blur', (e) => this.handlerTitleBlur(e));
        $btnDelete!.addEventListener('click', (e) => this.handlerDeleteToDo(e));
      }

      $inpTitle?.closest('.control')?.classList.remove('is-loading');
      $button?.classList.remove('is-loading');
      $button!.disabled = false;
      $inpTitle!.value = '';
    });

    return false;
  }

  public render(): void {
    const $form = document.querySelector<HTMLFormElement>(this.selector);

    $form?.addEventListener('submit', (e: Event) => this.handlerCreateToDo(e));
  }
}
