// Import de App.css qui contiendra tout notre style css
import "./App.css";

// Import des composants
import Title from "./components/Title";
import Text from "./components/Text";

const App = () => {
  return (
    <>
      <div className="Tilte-P">
        <Title name="Lorem" />
        <Text />
      </div>
      <div className="Tilte-P">
        <Title name="Ipsum" />
        <Text />
      </div>
    </>
  );
};
// J'exporte mon composant App pour l'importer dans main.jsx
export default App;
