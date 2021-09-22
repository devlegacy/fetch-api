export class Banner {
  static prevent(): void {
    // Banner installation
    window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
      if (window.Dvx.userChoice) return;

      console.log('[sw]: client', 'beforeinstallprompt Event fired', e);
      e.preventDefault();

      // TODO: use store
      window.Dvx.banner = e;
      return false;
    });
    window.addEventListener('appinstalled', (e) => {
      console.log('[sw - client]', 'app installed', e);
    });
  }

  static async deferredPrompt(): Promise<void> {
    // TODO: use store
    if (!window.Dvx.banner) return;
    try {
      // The user has had a postive interaction with our app and Chrome
      // has tried to prompt previously, so let's show the prompt.
      window.Dvx.banner.prompt();
      // Follow what the user has done with the prompt.
      const choice = await window.Dvx.banner.userChoice;
      console.log('[sw]: client', 'User choice', choice.outcome);
      window.Dvx.userChoice = choice.outcome;
      if (choice.outcome === 'dismissed') {
        console.log('[sw]: client', 'User cancel installation');
      } else {
        console.log('[sw]: client', 'User added to homescreen');
      }
      // We no longer need the prompt.  Clear it up.
      window.Dvx.banner = null;
      console.log(window.Dvx.banner);
    } catch (err) {
      console.error('[sw]: client', 'Fail in install banner', err);
    }
  }
}
const banner = new Banner();
export default banner;
