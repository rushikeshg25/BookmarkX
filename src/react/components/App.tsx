import React from "react";

const dogSrc = "https://media.tenor.com/fej4_qoxdHYAAAAM/cute-puppy.gif";

const App = () => {
  const generateDogGif = () => {
    chrome.runtime.sendMessage({ action: "generateDogGif", dogSrc });
  };

  return (
    <main>
      <h1>Add a Dog Gif to Webpage</h1>
      <img src={dogSrc} alt="Dog Gif" />
      <button onClick={generateDogGif}>Generate Dog Gif</button>
    </main>
  );
};

export default App;
