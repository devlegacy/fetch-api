import { NavBarComponent } from './components/common/nav-bar.component';
import { ToDoCardComponent } from './components/todo/to-do-card.component';
import { CreateToDoComponent } from './components/todo/create-to-do.component';
import { UploadComponent } from './components/upload.component';
import { PracticeComponent } from './components/practice.component';
import { ServiceWorker } from './modules/pwa/service-worker';

window.Dvx = {
  badge: 10,
  isServiceWorkerInstalled: false,
};

class App {
  async start(): Promise<void> {
    // Banner installation
    let bannerEvent: null | BeforeInstallPromptEvent = null;
    window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
      console.log('[sw]: client', 'beforeinstallprompt Event fired', e);
      e.preventDefault();
      bannerEvent = e;
      return false;
    });
    window.addEventListener('appinstalled', (e) => {
      console.log('[sw - client]', 'app installed', e);
    });

    const forceRegister = document.getElementById('forceRegisterServiceWorker');
    if (forceRegister) {
      forceRegister.addEventListener('click', async () => {
        await ServiceWorker.unregister();
        await ServiceWorker.register();
      });
    }

    const deferredBannerPrompt = document.getElementById('deferredBannerPrompt');
    if (deferredBannerPrompt) {
      deferredBannerPrompt.addEventListener('click', async (e) => {
        if (bannerEvent) {
          try {
            // The user has had a postive interaction with our app and Chrome
            // has tried to prompt previously, so let's show the prompt.
            bannerEvent.prompt();
            // Follow what the user has done with the prompt.
            const choice = await bannerEvent.userChoice;
            console.log('[sw]: client', 'User choice', choice.outcome);
            if (choice.outcome === 'dismissed') {
              console.log('[sw]: client', 'User cancel installation');
            } else {
              console.log('[sw]: client', 'User added to homescreen');
            }
            // We no longer need the prompt.  Clear it up.
            bannerEvent = null;
            console.log(bannerEvent);
          } catch (err) {
            console.error('[sw]: client', 'Fail in install banner', err);
          }
        }
      });
    }

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
