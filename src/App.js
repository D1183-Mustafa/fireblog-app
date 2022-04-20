import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { AppContextprovider } from "./contexts/AppContext";

function App() {
  return (
    <div className="App">
      <AppContextprovider>
        <AppRouter />
      </AppContextprovider>
    </div>
  );
}

export default App;
