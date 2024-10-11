chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addDogGif" && typeof message.dogSrc === "string") {
    const dogImg = document.createElement("img");
    dogImg.src = message.dogSrc;
    dogImg.alt = "Dog image";
    document.body.appendChild(dogImg);
    sendResponse({ status: "Image added" });
  } else {
    console.error("Invalid message format");
    sendResponse({ status: "Error: Invalid message format" });
  }
  return true; // Indicates that the response is sent asynchronously
});
