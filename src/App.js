import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <Dictionary />
        <footer>
          This website was coded by{" "}
          <a
            href="https://www.linkedin.com/in/taliberlin/"
            title="View Tali Berlin's LinkedIn profile"
          >
            {" "}
            Tali Berlin
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/taliberlin/dictionary"
            title="View source-code on GitHub"
          >
            {" "}
            open-sourced!
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
