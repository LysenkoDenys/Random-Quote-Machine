import Panel from "./components/Panel";
import Signature from "./components/Signature";
import generateRandomNumberForColorRgba from "./utils/generateRandomNumberForColorRgba";

function App() {
  const randColorRgba = `rgba(${generateRandomNumberForColorRgba()},${generateRandomNumberForColorRgba()},${generateRandomNumberForColorRgba()},1)`;
  document.body.style.backgroundColor = randColorRgba;

  return (
    <div className="max-w-8xl px-10 py-10 font-sans absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
      <Panel initialClassesList="" />
      <Signature />
    </div>
  );
}

export default App;
