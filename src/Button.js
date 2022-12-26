function Button(props) {
  console.log(props);

  return (
    <div>
      <button disabled={props.work}>{props.text}</button>
    </div>
  );
}

export default Button;
