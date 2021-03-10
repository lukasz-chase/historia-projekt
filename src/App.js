//pages
import Hiroshima from "./pages/hiroshima";
import Nagasaki from "./pages/nagasaki";
import GlobalStyles from "./components/GlobalStyles";
//react router
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path="/" exact>
        <Hiroshima />
      </Route>
      <Route path="/nagasaki">
        <Nagasaki />
      </Route>
    </div>
  );
}

export default App;
