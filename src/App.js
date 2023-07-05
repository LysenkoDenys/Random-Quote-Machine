import Panel from "./components/Panel";
import Signature from "./components/Signature";

function App() {
  return (
    <div className="max-w-8xl px-10 py-10 font-sans absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 ">
      <Panel />
      <Signature />
    </div>
  );
}

export default App;
