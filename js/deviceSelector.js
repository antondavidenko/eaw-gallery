import { getCookie, setCookie } from './cookies.js';

export class DeviceSelector {
  constructor(modeChangeCallback) {
    this.modeChangeCallback = modeChangeCallback;
    this.switchMode(this.getDefaultMode());
    document.getElementById("mobile-selector").addEventListener('click', () => this.switchMode('desktop'));
    document.getElementById("desktop-selector").addEventListener('click', () => this.switchMode('mobile'));
  }

  switchMode(mode) {
    this.mode = mode;
    setCookie("mode", mode);
    const selectedSelector = document.getElementById(mode === 'desktop' ? "desktop-selector" : "mobile-selector");
    const unselectedSelector = document.getElementById(mode === 'desktop' ? "mobile-selector" : "desktop-selector");

    unselectedSelector.style.display = "none";
    selectedSelector.style.display = "block";

    this.modeChangeCallback(this.mode);
  }

  getDefaultMode() {
    if (getCookie("mode")) {
      return getCookie("mode");
    } else {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      return isMobile ? 'mobile' : 'desktop';
    }
  }
}
