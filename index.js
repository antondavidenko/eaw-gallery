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
  HTMLblock += "<a target='_blank' href=''>";
    HTMLblock += "<div class='ico'><img src='" + ico_URL + "'></div>"
  HTMLblock += "</a>";
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
    const elemeant = document.getElementById(`projectId${i}`);
    if ( elemeant ) {
      const {desktop, mobile} = this.content[i].play;
      const playLink = this.mode === 'desktop' ? desktop ? desktop : mobile : mobile;
      elemeant.querySelector("a").href = playLink;
    }
  }
}
