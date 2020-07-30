import { ToDoService } from './services/to-do.service';
import { Post } from './models/post';
import { NavBarComponent } from './components/nav-bar.component';
import { ToDoComponent } from './components/to-do.component';

class App {
  start(): void {
    console.log('>> Start app');
    new NavBarComponent();
    new ToDoComponent().render();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App().start();
});
