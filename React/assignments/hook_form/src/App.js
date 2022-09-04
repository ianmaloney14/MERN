import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form
        firstName={""}
        lastName={""}
        email={""}
        password=""
        confirmPassword=""
      />
    </div>
  );
}

export default App;
