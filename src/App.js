import "./styles/global.css";
import "./styles/theme.css";
import Main from "./routes/Main";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.app_main}>
      <Main />
    </div>
  );
}

export default App;
