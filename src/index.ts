import { NavBarComponent } from './components/nav-bar.component';
import { ToDoComponent } from './components/todo/to-do.component';
import { CreateToDoComponent } from './components/todo/create-to-do.component';
import { UploadComponent } from './components/upload.component';

class App {
  start(): void {
    console.log('>> Start app');
    new NavBarComponent();
    new ToDoComponent({ selector: '#to-do-container' }).render();
    new CreateToDoComponent({ selector: '#frm-create-post' }).render();
    new UploadComponent({ selector: '#frm-upload' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App().start();
});
