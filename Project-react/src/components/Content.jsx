//J'importe mes deux components Title et Paragraph
import Title from "./Title";
import Paragraph from "./Paragraph";

const Content = (props) => {
  return (
    <>
      <div className="Tilte-P">
        <Title name={props.name} />
        <Paragraph text={props.text} />
      </div>
    </>
  );
};
// J'exporte mon composant App pour l'importer dans main.jsx
export default Content;
