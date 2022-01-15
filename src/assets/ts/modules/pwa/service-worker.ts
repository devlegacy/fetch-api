export class ServiceWorker {
  private constructor() {}

  private static instance: ServiceWorker | null = null;

  public static getInstance(): ServiceWorker {
    if (!ServiceWorker.instance) {
      ServiceWorker.instance = new ServiceWorker();
    }

    return ServiceWorker.instance;
  }

  /**
   * Register service worker
   * Put at end to caché functionality
   * @param path
   */
  async register(path = '/sw.js', confirmDialog: () => boolean): Promise<void> {
    if (!('serviceWorker' in navigator)) {
      console.log('[sw ]: client', 'Service workers are not supported.');
      return;
    }

    navigator.serviceWorker.addEventListener('controllerchange', function () {
      window.location.reload();
    });

    // Register a service worker hosted at the root of the
    // site using the default scope.
    try {
      const registration = await navigator.serviceWorker.register(path);
      console.log('[sw]: client', 'Service worker registration succeeded:', registration);

      registration.onupdatefound = function () {
        const currentInstallation = registration.installing;
        if (registration.waiting && confirmDialog()) {
          currentInstallation?.postMessage({ type: 'SKIP_WAITING' });
        }

        if (currentInstallation) {
          currentInstallation.onstatechange = function () {
            if (currentInstallation?.state === 'installed') {
              if (confirmDialog()) {
                currentInstallation?.postMessage({ type: 'SKIP_WAITING' });
              }
            }
          };
        }
      };

      // TODO: use store
      window.Dvx.isServiceWorkerInstalled = true;
    } catch (err) {
      console.error('[sw ]: client', 'Service worker registration failed:', err);
    }
  }

  async unregister(): Promise<void> {
    if (!('serviceWorker' in navigator)) {
      console.log('[sw ]: client', 'Service workers are not supported.');
      return;
    }

    try {
      const registrations = await navigator.serviceWorker.getRegistrations();

      registrations.forEach((registration) => {
        console.log('[sw]: client', 'registration', registration);
        registration.unregister();
      });
    } catch (err) {
      console.error('[sw ]: client', 'Service worker registration failed:', err);
    }
  }

  async skipWaiting() {
    const registration = await navigator.serviceWorker.ready;
    console.log(registration);
    registration?.active?.postMessage({ type: 'SKIP_WAITING' });
    navigator.serviceWorker.controller?.postMessage({ type: 'SKIP_WAITING' });
  }
}

export default ServiceWorker;
