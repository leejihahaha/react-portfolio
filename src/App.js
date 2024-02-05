import { Outlet } from "react-router-dom";
import "./styles/global.css";
import "./styles/theme.css";
import { Navbar } from "./components/Navbar";
// import profile from "./assets/profile.png";

function App() {
  return (
    <div className="App">
      {/* <img src={profile} alt="Profile" /> */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
