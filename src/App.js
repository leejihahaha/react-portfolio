import { Route, Routes } from "react-router-dom";
import "./styles/global.css";
import "./styles/theme.css";
import Main from "./routes/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
