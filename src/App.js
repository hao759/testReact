// import logo from "./logo.svg";
import "./test.scss";
import "./App.css";
import Product from "./component/Product";
import "react-image-lightbox/style.css";
import Nav from "./component/Navigation/Nav.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import TodoList from "./component/Todoapp";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          {/* <About /> */}
          {/* <Nav /> */}
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
        <div className="content-right">
          {/* <AddNewProduct /> */}
          <hr />

          <Product />
        </div>
      </div>
    </Router>
  );
}

export default App;
