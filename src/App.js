// import logo from "./logo.svg";
import "./test.scss";
import "./App.css";
import Product from "./component/Product";
import "react-image-lightbox/style.css";
import Nav from "./component/Navigation/Nav.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "./component/weather/weather";
import OTP from "./component/OTP/OTP";
// import TodoList from "./component/Todoapp";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/OTP">
          <OTP />
        </Route>
        <Route path="/home">{"Ko co j ca"}</Route>
        <Route path="*">{"Dau *"}</Route>
        {/* duoi cung */}
      </Switch>
      <div className="App">
        <div className="content-right">
          {/* <AddNewProduct /> */}
          <hr />
        </div>
      </div>
    </Router>
  );
}

export default App;
