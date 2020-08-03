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
    let content: string = '';
    let $element = document.querySelector(this.options.selector);

    this.toDoService.getAll().then((posts: Array<Post>) => {
      // console.log(this.options.selector);
      // document.getElementById('to-do-container');
      this.posts = posts;
      this.posts.forEach((post: Post) => {
        content += `
                      <div class="column is-12">
                        <article class="card">
                          <div class="card-content">
                            <div class="content">
                              ${post.title}
                            </div>
                          </div>
                        </article>
                      </div>
        `;
      });
      $element!.innerHTML = content;
      $element?.addEventListener('click', (e: Event) => {
        const target = <HTMLElement>e.target;
        if (target.classList.value.startsWith('content')) {
          console.log(target);
          target.addEventListener(
            'blur',
            (e: Event) => {
              console.log(e);
              const target = <HTMLElement>e.target;
              target.classList.remove('px-4', 'py-4');
              target.contentEditable = 'false';
            },
            {
              once: true,
            }
          );
          target.classList.add('px-4', 'py-4');
          target.contentEditable = 'true';
          target.focus();
        }
      });
    });
  }
}
