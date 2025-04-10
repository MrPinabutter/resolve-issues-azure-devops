chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "resolveComments",
    title: "Resolver comentários no Azure DevOps",
    contexts: ["all"],
    documentUrlPatterns: ["*://dev.azure.com/*"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "resolveComments") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: resolveComments,
    });
  }
});

function resolveComments() {
  [
    ...document.querySelectorAll(
      "button.bolt-button.enabled.bolt-focus-treatment"
    ),
  ]
    .filter((it) => it.innerText === "Resolve")
    .forEach((it) => it.click());
}
