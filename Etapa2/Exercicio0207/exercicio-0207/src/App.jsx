// jsx => Javascript Extended
//Vai permitir escrever código "HTML"
// dentro do js
// Declarativa

//Vou importar outros componentes aqui.
//Vou criar o componente/estrutura principal aqui.
import Mulheres from "./components/Mulheres";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <Mulheres />
    </main>
  );
}

export default App;
