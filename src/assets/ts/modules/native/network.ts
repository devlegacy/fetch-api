// Event dispatcher class
export class Network {
  constructor() {
    this.networkStatusCheck();
    window.addEventListener('online', this.networkStatusCheck);
    window.addEventListener('offline', this.networkStatusCheck);
  }

  private networkStatusCheck(e: null | Event = null) {
    const isOnline = navigator.onLine;

    if (e && e.type) {
    } else if (!isOnline) {
    }

    console.log('[network]', isOnline, e);
  }

  public on(event: 'online' | 'offline', cb: () => void) {}
}

const network = new Network();
export default network;
