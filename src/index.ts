import { NavBarComponent } from './components/nav-bar.component';
import { ToDoComponent } from './components/to-do.component';

class App {
  start(): void {
    console.log('>> Start app');
    new NavBarComponent();
    new ToDoComponent({ selector: '#to-do-container' }).render();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App().start();
});
