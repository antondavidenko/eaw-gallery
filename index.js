const ICO_FOLDER = "./images/content/";

this.initIndexScripts = () => {
  this.mode = 'desktop';
  this.loadContent("./content.json", this.showContent);
  document.getElementById("mobile-selector").addEventListener('click', () => this.switchMode('mobile'));
}

this.loadContent = (fileName, callback) => {
  onDataInternal = this.onDataInternal;
  $.ajax({ url: fileName, dataType: 'json', success: (json) => { this.content = json.content; callback(json.content); } });
}

this.showContent = (contentJSON) => {
  document.getElementById("content").innerHTML = "";
  for (let i in contentJSON) {
    document.getElementById("content").innerHTML += this.showItem(contentJSON[i]);
  }
}

this.showItem = (itemJSON) => {
  let HTMLblock = "";
  const ico_URL = ICO_FOLDER + itemJSON.ico;
  HTMLblock += "<div class='project'><div class='content'>"
  HTMLblock += "<div class='project-name'>" + itemJSON.name + "</div><br>";
  HTMLblock += `<a target='_blank' href='${ this.mode === 'desktop' ? itemJSON.play.desktop : itemJSON.play.mobile }'>`;
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

  selectedSelector.classList.add('selected');
  selectedSelector.classList.remove('clickable');
  unselectedSelector.classList.remove('selected');
  unselectedSelector.classList.add('clickable');
  selectedSelector.removeEventListener('click', () => this.switchMode(mode !== 'desktop' ? 'mobile' : 'desktop'));
  unselectedSelector.addEventListener('click', () => this.switchMode(mode !== 'desktop' ? 'desktop' : 'mobile'));
  
  this.showContent(this.content);
}
