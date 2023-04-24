const Paragraph = (props) => {
  return (
    <>
      <p className="text">{props.text}</p>
    </>
  );
};
// J'exporte mon composant App pour l'importer dans main.jsx
export default Paragraph;
