//react router
import { Route } from "react-router-dom";
//pages
import GlobalStyles from "./components/GlobalStyles";
import SadakoSasaki from "./pages/sadakoSasaki";
import HiroshimaPomnikPokoju from "./pages/hiroshimaPomnikPokoju";
import HiroshimaMuzeum from "./pages/hiroshimaMuzeum";
import KwiatZycia from "./pages/nagasakiKwiat";
import NagasakiPomnikPokoju from "./pages/nagasakiPomnikPokoju";
import NagasakiMuzeum from "./pages/nagasakiMuzeum";
import Glowna from "./pages/glowna";
import Hiroshima from "./pages/hiroshima";
import Nagasaki from "./pages/nagasaki";
import Galeria from "./pages/galeria";
import Upamietnienie from "./pages/upamietnienie";
import Projekt from "./pages/oProjekcie";
import Zrodla from "./pages/zrodla";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/" exact>
        <Glowna />
      </Route>
      <Route path="/hiroshima/sadako-sasaki" exact>
        <SadakoSasaki />
      </Route>
      <Route path="/hiroshima/pomnik-pokoju" exact>
        <HiroshimaPomnikPokoju />
      </Route>
      <Route path="/hiroshima/muzeum" exact>
        <HiroshimaMuzeum />
      </Route>
      <Route path="/nagasaki/kwiat-zycia-i-smierci" exact>
        <KwiatZycia />
      </Route>
      <Route path="/nagasaki/pomnik-pokoju" exact>
        <NagasakiPomnikPokoju />
      </Route>
      <Route path="/galeria" exact>
        <Galeria />
      </Route>
      <Route path="/nagasaki/muzeum" exact>
        <NagasakiMuzeum />
      </Route>
      <Route path="/nagasaki" exact>
        <Nagasaki />
      </Route>
      <Route path="/hiroshima" exact>
        <Hiroshima />
      </Route>
      <Route path="/upamietnienie" exact>
        <Upamietnienie />
      </Route>
      <Route path="/o-projekcie" exact>
        <Projekt />
      </Route>
      <Route path="/zrodla" exact>
        <Zrodla />
      </Route>
    </div>
  );
}

export default App;
