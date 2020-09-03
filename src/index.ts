import { NavBarComponent } from './components/common/nav-bar.component';
import { ToDoCardComponent } from './components/todo/to-do-card.component';
import { CreateToDoComponent } from './components/todo/create-to-do.component';
import { UploadComponent } from './components/upload.component';
import { PracticeComponent } from './components/practice.component';

class App {
  start(): void {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('>> Start app');
      new NavBarComponent({ selector: '.navbar-burger' }).render();
      new PracticeComponent({ selector: '#practices' }).render();
      new UploadComponent({ selector: '#frm-upload' }).render();

      new ToDoCardComponent({ selector: '#to-do-container' }).render();
      new CreateToDoComponent({ selector: '#frm-create-post' }).render();
    });
  }
}

new App().start();
