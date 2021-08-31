import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound/notfound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/:id" component={DetailPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
