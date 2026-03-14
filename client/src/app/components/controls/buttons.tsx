

function Submit(props) {
  const defaults = {id: "submit", label: "Submit", style: {}};
  let style = props.style || defaults.style;
  let label = props.label || defaults.label;
  let id = props.id || defaults.id;

  return (
    <button id={id} className="submit" style={style}>{label}</button>
  )
}


export { Submit };
