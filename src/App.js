import AppRouter from "./app-router/AppRouter";
import "./App.css";
import { AppContextprovider } from "./contexts/AppContext";
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <AppContextprovider>
        <AppRouter />
        <ToastContainer />
      </AppContextprovider>
    </div>
  );
}

export default App;
