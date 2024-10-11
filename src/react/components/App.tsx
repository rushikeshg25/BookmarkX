import { useState } from "react";

const App = () => {
  const fetchBookmarks = () => {
    try {
      chrome.runtime.sendMessage({ action: "fetchBookmarks" });
      setIsFetched(true);
    } catch (error) {
      alert("Error fetching bookmarks");
    }
  };
  const exportBookmarks = () => {
    chrome.runtime.sendMessage({ action: "exportBookmarks" });
  };
  const [isFetched, setIsFetched] = useState(false);
  return (
    <main>
      <h1>BookmarkX</h1>

      <button onClick={fetchBookmarks}>Fetch Bookmarks</button>
      <button onClick={exportBookmarks} disabled={!isFetched}>
        Export Bookmarks
      </button>
    </main>
  );
};

export default App;

//generateDogGif
