import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default App;
