//Fichier MyParent.jsx
function MyParent(props) {
  return (
    <div>
      <p>Hello World</p>
      {props.children}
      <p>Enjoy !</p>
    </div>
  );
}
export default MyParent;
