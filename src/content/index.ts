chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getBookmark" && typeof message.dogSrc === "string") {
  } else {
    console.error("Invalid message format");
    sendResponse({ status: "Error: Invalid message format" });
  }
  return true; // Indicates that the response is sent asynchronously
});
