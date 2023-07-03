import Panel from "./components/Panel";
import generateRandomNumberForColor from "./utils/generateRandomNumberForColor";

function App() {
  const randColor = `rgba(${generateRandomNumberForColor()},${generateRandomNumberForColor()},${generateRandomNumberForColor()},1)`;
  document.body.style.backgroundColor = randColor;
  return (
    <div className="mx-auto my-auto max-w-8xl px-10 py-10 font-sans">
      <Panel initialClassesList="" />
      <p className="text-center text-white mt-3">
        by{" "}
        <a
          href="https://www.linkedin.com/in/lysenko-denys/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lysenko Denys
        </a>
      </p>
    </div>
  );
}

export default App;
