import "./App.css";
import Person1 from "./HOC/Person1";
import Person2 from "./HOC/Person2";

function App() {
  return (
    <div className="App">
      <h1>Auction</h1>
      <Person1 />
      <Person2 />
    </div>
  );
}

export default App;
