import { useState } from "react";
import "./index.css";
import { RegularList, VirtualizedList } from "./components/index";

export default function App() {
  const [showVirtualized, setShowVirtualized] = useState<boolean>(true);
  const listItemCount: number = 1000000;

  function handleClick(flag: boolean) {
    if (flag === showVirtualized) return;
    setShowVirtualized(flag);
  }

  return (
    <div className="App">
      {showVirtualized ? (
        <div className="virtualized-list">
          <button onClick={() => handleClick(false)}>
            Render Regular List
          </button>
          <h1>Virtualized List:</h1>
          <VirtualizedList count={listItemCount} />
        </div>
      ) : (
        <div className="regular-list">
          <button onClick={() => handleClick(true)}>
            Render Virtualized List
          </button>
          <h1>Regular List:</h1>
          <RegularList count={listItemCount} />
        </div>
      )}
    </div>
  );
}
