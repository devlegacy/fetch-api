import { NavBarComponent } from './components/common/nav-bar.component';
import { ToDoCardComponent } from './components/todo/to-do-card.component';
import { CreateToDoComponent } from './components/todo/create-to-do.component';
import { UploadComponent } from './components/upload.component';
import { PracticeComponent } from './components/practice.component';
import { ServiceWorker } from './modules/pwa/service-worker';
import { Banner } from './modules/pwa/banner';
import network from './modules/native/network';

window.Dvx = {
  badge: 10,
  isServiceWorkerInstalled: false,
  // let bannerEvent: null | BeforeInstallPromptEvent = null;
  banner: null,
  userChoice: null,
  ...(window.Dvx || {}),
};

class App {
  async start(): Promise<void> {
    network.on('offline', (): void => {
      console.log('on');
    });
    Banner.prevent();

    const reloadRegisterServiceWorker = document.getElementById('reloadRegisterServiceWorker');
    reloadRegisterServiceWorker?.addEventListener('click', async () => {
      reloadRegisterServiceWorker.classList.toggle('is-loading');
      console.log('[sw]: unregister');
      await ServiceWorker.unregister();
      console.log('[sw]: register');
      await ServiceWorker.register();

      reloadRegisterServiceWorker.classList.toggle('is-loading');
    });

    const unregisterServiceWorker = document.getElementById('unregisterServiceWorker');
    unregisterServiceWorker?.addEventListener('click', async () => await ServiceWorker.unregister());

    const register = document.getElementById('registerServiceWorker');
    register?.addEventListener('click', async () => await ServiceWorker.register());

    const deferredBannerPrompt = document.getElementById('deferredBannerPrompt');
    deferredBannerPrompt?.addEventListener('click', async (e) => Banner.deferredPrompt());

    document.addEventListener('DOMContentLoaded', () => {
      console.log('>> Start app');
      new NavBarComponent({ selector: '.navbar-burger' }).render();
      new PracticeComponent({ selector: '#practices' }).render();
      new UploadComponent({ selector: '#frm-upload' }).render();

      new ToDoCardComponent({ selector: '#to-do-container' }).render();
      new CreateToDoComponent({ selector: '#frm-create-post' }).render();
    });

    await ServiceWorker.register();

    if ('setAppBadge' in navigator) {
      // @ts-expect-error
      const badge = await navigator.setAppBadge(window.Dvx.badge);

      console.log('[sw - client]', 'badge', badge);

      const counterInterval = setInterval(async () => {
        console.log('interval');
        if (window.Dvx.badge > 0) {
          window.Dvx.badge--;
          // @ts-expect-error
          await navigator.setAppBadge(window.Dvx.badge);
          return;
        }
        // @ts-expect-error
        navigator.clearAppBadge();
        clearInterval(counterInterval);
      }, 800);

      //
    } else {
      console.log('[sw ]: client', 'App badge is not supported.');
    }
  }
}

new App().start();
