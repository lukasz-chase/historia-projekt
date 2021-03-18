//pages
import HiroshimaGalery from "./pages/hiroshimaGalery";
import NagasakiGalery from "./pages/nagasakiGalery";
import GlobalStyles from "./components/GlobalStyles";
import HiroshimaPomnik1 from "./pages/hiroshimaPomnik1";
import HiroshimaPomnik2 from "./pages/hiroshimaPomnik2";
import NagasakiPomnik1 from "./pages/nagasakiPomnik1";
import NagasakiPomnik2 from "./pages/nagasakiPomnik2";
//react router
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path="/" exact>
        <About />
      </Route>
      <Route path="/hiroshima/pomnik1" exact>
        <HiroshimaPomnik1 />
      </Route>
      <Route path="/hiroshima/pomnik2" exact>
        <HiroshimaPomnik2 />
      </Route>
      <Route path="/hiroshima/galeria" exact>
        <HiroshimaGalery />
      </Route>
      <Route path="/nagasaki/pomnik1" exact>
        <NagasakiPomnik1 />
      </Route>
      <Route path="/nagasaki/pomnik2" exact>
        <NagasakiPomnik2 />
      </Route>
      <Route path="/nagasaki/galeria">
        <NagasakiGalery />
      </Route>
    </div>
  );
}

export default App;
