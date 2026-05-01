const ICO_FOLDER = "./images/content/";

this.initIndexScripts = () => {
  this.loadContent("./content.json", this.showContent);
}

this.loadContent = (fileName, callback) => {
  onDataInternal = this.onDataInternal;
  $.ajax({ url: fileName, dataType: 'json', success: (json) => callback(json.content) });
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
  HTMLblock += "<div class='ico'><img src='" + ico_URL + "'></div>"
  HTMLblock += "<div class='project-name'>" + itemJSON.name + "</div><br>";

  HTMLblock += "<br><br><div class='project-play'>";
  HTMLblock += "<a target='_blank' href='" + itemJSON.play + "'>PLAY</a>";
  HTMLblock += "</div>";

  HTMLblock += "</div></div>";

  return HTMLblock;
}
