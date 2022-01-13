import { NavBarComponent } from './components/common/nav-bar.component';
import { ToDoCardComponent } from './components/todo/to-do-card.component';
import { CreateToDoComponent } from './components/todo/create-to-do.component';
import { UploadComponent } from './components/upload.component';
import { PracticeComponent } from './components/practice.component';
import { ServiceWorker } from './modules/pwa/service-worker';
import { Banner } from './modules/pwa/banner';
import { Network } from './modules/native/network';

// let bannerEvent: null | BeforeInstallPromptEvent = null;
window.Dvx = {
  badge: 10,
  isServiceWorkerInstalled: false,
  banner: null,
  userChoice: null,
};

class App {
  async start(): Promise<void> {
    new Network((isOnline) => {
      const $network = document.querySelector('.network');
      const $networkStatus = document.querySelector('.network-status');
      document.documentElement.style.setProperty('--network', '0');

      if (isOnline) {
        $networkStatus?.classList.remove('fa', 'fa-ban', 'has-text-danger');
        $networkStatus?.classList.add('far', 'fa-check-circle', 'has-text-success');
      } else {
        $networkStatus?.classList.remove('far', 'fa-check-circle', 'has-text-success');
        $networkStatus?.classList.add('fa', 'fa-ban', 'has-text-danger');
      }

      $network?.animate(
        [
          {
            bottom: 0,
          },
          {
            bottom: 0,
          },
          {
            bottom: 0,
          },
          {
            bottom: '-51.33px',
          },
        ],
        {
          duration: 2000,
          iterations: 1,
        }
      );
    });
    Banner.prevent();

    const $skipWaitingServiceWorker = document.getElementById('skipWaitingServiceWorker');
    $skipWaitingServiceWorker?.addEventListener('click', async () => {
      await ServiceWorker.skipWaiting();
    });

    const $reloadRegisterServiceWorker = document.getElementById('reloadRegisterServiceWorker');
    $reloadRegisterServiceWorker?.addEventListener('click', async () => {
      $reloadRegisterServiceWorker.classList.toggle('is-loading');
      console.log('[sw]: unregister');
      await ServiceWorker.unregister();
      console.log('[sw]: register');
      await ServiceWorker.register('/sw.js');

      $reloadRegisterServiceWorker.classList.toggle('is-loading');

      await ServiceWorker.skipWaiting();

      window.location.reload();
    });

    const $unregisterServiceWorker = document.getElementById('unregisterServiceWorker');
    $unregisterServiceWorker?.addEventListener('click', async () => await ServiceWorker.unregister());

    const $register = document.getElementById('registerServiceWorker');
    $register?.addEventListener('click', async () => await ServiceWorker.register());

    const $deferredBannerPrompt = document.getElementById('deferredBannerPrompt');
    $deferredBannerPrompt?.addEventListener('click', async (e) => Banner.deferredPrompt());

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

      console.log('[pwa]:client', 'badge', badge);

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
      console.log('[pwa]: client', 'App badge is not supported.');
    }
  }
}

new App().start();
