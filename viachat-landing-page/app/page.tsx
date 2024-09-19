import PaginaInicial from "./components/PaginaInicial/paginaIncial";
import PlanosOrcamentos from "./components/PlanosOrcamentos/planosOrcamentos";
import SaibaMais from "./components/SaibaMais/saibaMais";
import Plataformas from "./components/Plataformas/plataformas";

export default function Home() {
  return (
    <main>
      <PaginaInicial/>
      <PlanosOrcamentos/>
      <SaibaMais/>
      <Plataformas/>
    </main>
  );
}
