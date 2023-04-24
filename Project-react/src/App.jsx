// Import de App.css qui contiendra tout notre style css
import "./App.css";

// Import mon component Content
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <Content
        name="Lorem"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet voluptates fugiat consectetur accusamus tempore eos, excepturi, praesentium ipsam qui suscipit enim distinctio nemo commodi explicabo cum provident doloribus consequatur"
      />
      <Content
        name="Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet voluptates fugiat consectetur accusamus tempore eos, excepturi, praesentium ipsam qui suscipit enim distinctio nemo commodi explicabo cum provident doloribus consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet voluptates fugiat consectetur accusamus tempore eos, excepturi, praesentium ipsam qui suscipit enim distinctio nemo commodi explicabo cum provident doloribus consequatur"
      />
    </>
  );
};
// J'exporte mon composant App pour l'importer dans main.jsx
export default App;
