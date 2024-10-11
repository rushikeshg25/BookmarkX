chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "generateDogGif") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id as number, {
        action: "addDogGif",
        dogSrc: message.dogSrc,
      });
    });
  }
});
