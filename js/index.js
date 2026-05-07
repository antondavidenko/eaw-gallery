import { DeviceSelector } from './deviceSelector.js';
import { PrizeSelector } from './prizeSelector.js';

const ICO_FOLDER = "./images/content/";

class EawGallery {
  constructor() {
    this.loadContent("./content.json", (content) => {
      this.content = content;
      this.showContent();
      this.deviceSelector = new DeviceSelector(this.onViewModeChange.bind(this));
      this.prizeSelector = new PrizeSelector();
    });
  }

  loadContent(fileName, callback) {
    $.ajax({ url: fileName, dataType: 'json', success: (json) => callback(json.content)});
  }

  onViewModeChange(mode) {
    for (let i in this.content) {
      const element = document.getElementById(`projectId${i}`);
      if ( element ) {
        element.querySelector(".clickable").addEventListener('click', () => {
          const {desktop, mobile} = this.content[i].play;
          const playLink = mode === 'desktop' ? desktop ? desktop : mobile : mobile;
          this.showGame(playLink, this.content[i].size, mode);
        });
      }
    }
  }

  showContent() {
    document.getElementById("content").innerHTML = "";
    for (let i in this.content) {
      document.getElementById("content").innerHTML += this.renderItem(this.content[i], i);
    }
  }

  renderItem(itemJSON, id) {
    return `<div class='project content' id='projectId${id}'>
              <div class='project-name'>${itemJSON.name}</div><br>
              <span class='ico clickable'><img src='${ICO_FOLDER + itemJSON.ico}'></span>
            </div>`;
  }

  showGame(game, size, mode){
    const { width, height } = mode === 'desktop' ? size.desktop ? size.desktop : size : size.mobile ? size.mobile : size;
    const viewer = document.getElementById("game-viewer");
    viewer.querySelector("iframe").src = game;
    if (width <= 750) {
      const gap = (880 - width) / 2;
      viewer.style.padding = `25px ${gap}px 25px ${gap}px`;
    } else {
      viewer.querySelector("iframe").style.width = `${width}px`;
      document.getElementById("body").style.width = `${width + 50}px`;
      viewer.style.padding = `25px 25px 25px 25px`;
    }

    if (height < 550) {
      viewer.querySelector("iframe").style.height = `${height}px`;
    }

    viewer.style.display = "block";
    document.getElementById("prize-selector").style.display = "flex";
    document.getElementById("content").style.display = "none";
    document.getElementById("device-selector").style.display = "none";
  }
}

new EawGallery();
