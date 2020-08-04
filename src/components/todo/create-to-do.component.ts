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
        $title.closest('.control')?.classList.remove('is-loading');
        $button.disabled = false;
        $title.value = '';

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
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </article>
      `;
        let newPost = document.createElement('div');
        newPost.classList.add('column', 'is-12');
        newPost.innerHTML = template;
        document.querySelector('#to-do-container')?.prepend(newPost);
      });
      return false;
    });
  }
}
