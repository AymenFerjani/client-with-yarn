function Hello(props) {
  const { firstName = "Flen", lastName = "Ben Foulen" } = props;
  return (
    <p>
      Hello <b>{firstName + " " + lastName}</b>
    </p>
  );
}
export default Hello;
