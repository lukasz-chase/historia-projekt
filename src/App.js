//pages
import HiroshimaGalery from "./pages/hiroshimaGalery";
import NagasakiGalery from "./pages/nagasakiGalery";
import GlobalStyles from "./components/GlobalStyles";
import SadakoSasaki from "./pages/sadakoSasaki";
import HiroshimaPomnikPokoju from "./pages/hiroshimaPomnikPokoju";
import HiroshimaMuzeum from "./pages/hiroshimaMuzeum";
import KwiatZycia from "./pages/nagasakiKwiat";
import NagasakiPomnikPokoju from "./pages/nagasakiPomnikPokoju";
import NagasakiMuzeum from "./pages/nagasakiMuzeum";
//react router
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Projekt from "./pages/oProjekcie";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path="/" exact>
        <Projekt />
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
      <Route path="/hiroshima/galeria" exact>
        <HiroshimaGalery />
      </Route>
      <Route path="/nagasaki/kwiat-zycia-i-smierci" exact>
        <KwiatZycia />
      </Route>
      <Route path="/nagasaki/pomnik-pokoju" exact>
        <NagasakiPomnikPokoju />
      </Route>
      <Route path="/nagasaki/galeria">
        <NagasakiGalery />
      </Route>
      <Route path="/nagasaki/muzeum">
        <NagasakiMuzeum />
      </Route>
    </div>
  );
}

export default App;
