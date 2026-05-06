const ICO_FOLDER = "./images/content/";

this.initIndexScripts = () => {
  this.loadContent("./content.json", () => {
    this.showContent();
    this.switchMode('desktop');
  });
  document.getElementById("mobile-selector").addEventListener('click', () => this.switchMode('desktop'));
  document.getElementById("desktop-selector").addEventListener('click', () => this.switchMode('mobile'));
}

this.loadContent = (fileName, callback) => {
  onDataInternal = this.onDataInternal;
  $.ajax({ url: fileName, dataType: 'json', success: (json) => { this.content = json.content; callback(json.content); } });
}

this.showContent = () => {
  document.getElementById("content").innerHTML = "";
  for (let i in this.content) {
    document.getElementById("content").innerHTML += this.showItem(this.content[i], i);
  }
}

this.showItem = (itemJSON, id) => {
  let HTMLblock = "";
  const ico_URL = ICO_FOLDER + itemJSON.ico;
  HTMLblock += `<div class='project' id='projectId${id}'><div class='content'>`
  HTMLblock += "<div class='project-name'>" + itemJSON.name + "</div><br>";
  HTMLblock += "<span class='ico clickable'><img src='" + ico_URL + "'></span>"
  HTMLblock += "</div>";

  HTMLblock += "</div></div>";

  return HTMLblock;
}

this.switchMode = (mode) => {
  this.mode = mode;
  let selectedSelector = document.getElementById("desktop-selector");
  let unselectedSelector = document.getElementById("mobile-selector");
  
  if (mode !== 'desktop') {
    selectedSelector = document.getElementById("mobile-selector");
    unselectedSelector = document.getElementById("desktop-selector");
  }

  unselectedSelector.style.display = "none";
  selectedSelector.style.display = "block";

  for (let i in this.content) {
    const element = document.getElementById(`projectId${i}`);
    if ( element ) {
      element.querySelector(".clickable").addEventListener('click', () => {
        const {desktop, mobile} = this.content[i].play;
        const playLink = this.mode === 'desktop' ? desktop ? desktop : mobile : mobile;
        this.showGame(playLink, this.content[i].size);
      });
    }
  }
}

this.showGame = (game, size) => {
  const { width, height } = size;
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
  document.getElementById("content").style.display = "none";
  document.getElementById("device-selector").style.display = "none";
}
