import { ComponentOption } from '../../core/options/component-option';
import { ToDoService } from '../../services/to-do.service';
import { RenderedComponent } from '../../core/components/rendered-component';
import { Post } from '../../models/post';

export class CreateToDoComponent implements RenderedComponent {
  constructor(
    private options: ComponentOption,
    private toDoService: ToDoService = new ToDoService()
  ) {}
  render(): void {
    const $form: HTMLFormElement = <HTMLFormElement>(
      document.querySelector(this.options.selector)
    );
    if ($form) {
      $form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        const $button: HTMLButtonElement = <HTMLButtonElement>(
          $form.querySelector('button')
        );
        const $title: HTMLTextAreaElement = <HTMLTextAreaElement>(
          $form.querySelector('textarea')
        );

        $title.closest('.control')?.classList.add('is-loading');
        $button.disabled = true;

        const post: Post = new Post($title.value);
        this.toDoService.create(post).then((data: Post) => {
          post.id = data.id;
          let template: string = `
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
          const newPost = document.createElement('div');
          newPost.classList.add('column', 'is-12');
          newPost.innerHTML = template;
          document.querySelector('#to-do-container')?.prepend(newPost);

          // newPost
          //   .querySelector<HTMLDivElement>('.card-content')
          //   ?.addEventListener('click', handlerTitleClick);

          // $title.closest('.control')?.classList.remove('is-loading');
          // $button.classList.add('is-loading');
          // $button.disabled = false;
          // $title.value = '';
          // $button.classList.remove('is-loading');
        });
        return false;
      });
    }
  }
}
