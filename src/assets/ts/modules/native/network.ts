// Event dispatcher class
export class Network {
  constructor(cb: (status: boolean) => void) {
    // this.networkStatusCheck();
    window.addEventListener('online', (e) => this.networkStatusCheck(cb, e));
    window.addEventListener('offline', (e) => this.networkStatusCheck(cb, e));
  }

  private networkStatusCheck(cb: (status: boolean) => void, e: null | Event = null) {
    const isOnline = navigator.onLine;

    if (e && e.type) {
      cb(isOnline);
    } else if (!isOnline) {
      cb(isOnline);
    }

    console.log('[network]', isOnline, e);
  }
}
