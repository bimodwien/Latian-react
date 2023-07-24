import Calculator from "./components/pr/Calculator";
import Input from "./components/testing/Input";
import Fitness from "./components/webUi/Fitness"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Calculator />
      <br />
      <Input />
      <Fitness />
    </div>
  );
}

export default App;
