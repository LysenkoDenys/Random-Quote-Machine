import { useEffect } from "react";
import Panel from "./components/Panel";
import Signature from "./components/Signature";
import generateRandomNumberForColor from "./utils/generateRandomNumberForColor";

function App() {
  // document.body.style.backgroundColor = "red";
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--color-body"
    );
  }, []);

  function setColor(color) {
    document.documentElement.style.setProperty(
      "--color-body",
      `${generateRandomNumberForColor()}`
    );
  }

  return (
    <div className="max-w-8xl px-10 py-10 font-sans absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 ">
      <Panel initialClassesList="" />
      <Signature />
    </div>
  );
}

export default App;
