import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage.jsx";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Slider from "./Components/sldier.jsx";
function App() {
  return (
    <div id="wrapper">
      <Route exact path="/">
        <Header />
        <Homepage />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
