import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthComponent from "./Components/Authentication/AuthComponent";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}>

          {/* Dynamic Path */}

        </Route>
        <Route path="/auth" element = {<AuthComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
