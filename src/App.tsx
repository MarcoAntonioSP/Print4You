import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Carrocel from "./components/carrocelum";
import Maisvendidos from "./components/maisvendidos";
import Prontaentrega from "./components/prontaentrega";
import Categorias from "./components/categorias";

function App() {
  return (
    <>
      <Header />
      <Categorias />
      <Carrocel />
      <Maisvendidos />
      <Prontaentrega />
      <Footer />
    </>
  );
}

export default App;
