import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Carrocel from "./components/carrocelum";
import Maisvendidos from "./components/maisvendidos";
import Prontaentrega from "./components/prontaentrega";
import Categorias from "./components/categorias";

function App() {
  const [count, setCount] = useState(0);

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
