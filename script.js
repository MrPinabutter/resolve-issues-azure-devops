function getword(info,tab) {
    chrome.tabs.create({  
      url: "https://open.spotify.com/search/" + info.selectionText
    });
  }
  chrome.contextMenus.create({
    title: "Procurar no spotify: %s", 
    contexts:["selection"], 
    onclick: getword
  });