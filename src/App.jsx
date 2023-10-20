import { Provider } from "react-redux";
import "./App.css";
import Students from "./components/Students";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Students />
      </Provider>
    </div>
  );
}

export default App;
