import { ToDoService } from '../../services/to-do.service';
import { RenderedComponent } from '../../core/components/rendered-component';
import { ComponentOption } from '../../core/options/component-option';
import { Post } from '../../models/post';
import { BaseComponent } from '../../core/components/base-component';

function getTitle($element: HTMLDivElement) {
  return $element.querySelector<HTMLDivElement>('.content') || $element;
}

export function handlerTitleClick(e: MouseEvent) {
  const $target = <HTMLDivElement>e.target;
  const $title = getTitle($target);
  if ($target.classList.contains('card-content')) {
    console.dir('click', $target);
    // if ($title.contentEditable === 'true') {
    //   e.preventDefault();
    //   $title.focus();
    // }
  }
  if ($title.contentEditable === 'true') {
    return;
  }
  $title.contentEditable = 'true';
  $title.classList.add('px-4', 'py-4');
  $title.focus();
}

function handlerTitleBlur(e: FocusEvent) {
  console.log('blur', e);
  e.preventDefault();
  return false;
  const $title = <HTMLDivElement>e.target;
  $title.classList.remove('px-4', 'py-4');
  $title.contentEditable = 'false';
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

  private handlerToDoCardActions($todoCards: NodeListOf<HTMLDivElement>): void {
    $todoCards.forEach(($todoCard: HTMLDivElement) => {
      const $title = getTitle($todoCard);
      $todoCard.addEventListener('click', handlerTitleClick);
      $title.addEventListener('blur', handlerTitleBlur);
    });
  }

  render(): void {
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

  // private deleteToDo($todo: HTMLElement) {
  //   const post: Post = JSON.parse(<string>$todo.dataset.post);
  //   this.toDoService.destroy(post);
  //   $todo.closest('div.column')?.remove();
  // }
}
