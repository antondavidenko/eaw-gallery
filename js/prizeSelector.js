import { getCookie, setCookie } from './cookies.js';

export class PrizeSelector {
  constructor() {
    this.prizesList = ["100$", "Honda civic", "iPhone Pro", "ERROR"];
    this.setDefaultPrizeSelectedId();
    this.showCurrentPrize();
    document.getElementById("prize-selector").addEventListener('click', () => this.switchNextPrize());
  }

  switchNextPrize() {
    this.prizeSelectedId++;
    if (this.prizeSelectedId >= this.prizesList.length) {
      this.prizeSelectedId = 0;
    }
    this.showCurrentPrize();
    setCookie("prizeValue", this.prizesList[this.prizeSelectedId]);
  }

  showCurrentPrize() {
    document.getElementById("prize-selector").innerText = this.prizesList[this.prizeSelectedId];
  }

  setDefaultPrizeSelectedId() {
    if (getCookie("prizeValue")) {
      this.prizeSelectedId = this.prizesList.indexOf(getCookie("prizeValue"));
    } else {
      this.prizeSelectedId = 0;
    }
  }
}
