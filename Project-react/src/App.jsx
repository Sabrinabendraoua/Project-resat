// Import de App.css qui contiendra tout notre style css
import "./App.css";

// Import des composants
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";

const App = () => {
  return (
    <>
      <div className="Tilte-P">
        <Title name="Lorem" />
        <Paragraph text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt ducimus autem corporis! Maxime, excepturi dolorum quibusdam eius unde commodi fuga, eligendi id, eaque inventore tempore ex quo architecto numquam!" />
      </div>

      <div className="Tilte-P">
        <Title name="Ipsum" />
        <Paragraph text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt ducimus autem corporis! Maxime, excepturi dolorum quibusdam eius unde commodi fuga, eligendi id, eaque inventore tempore ex quo architecto numquam! .Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt ducimus autem corporis! Maxime, excepturi dolorum quibusdam eius unde commodi fuga, eligendi id, eaque inventore tempore ex quo architecto numquam" />
      </div>
    </>
  );
};
// J'exporte mon composant App pour l'importer dans main.jsx
export default App;
