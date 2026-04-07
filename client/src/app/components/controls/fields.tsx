type DefaultFieldClasses = `form-control field field--${string}`
type FieldProps = { 
  id?: string; 
  className?: string; 
  name?: string; 
  placeholder?: string; 
  style?: object; 
}

function Email(props: FieldProps) {
  const default_classes: DefaultFieldClasses = "form-control field field--email"
  return (
    <input 
      type="email"
      id = {props.id || "email-field"}
      className = {props.className || default_classes}
      name={props.name || "email"}
      style={props.style || {}}
      placeholder={props.placeholder || ""}
      required
    />
  )
}

function Password(props: FieldProps) {
  const default_classes: DefaultFieldClasses = "form-control field field--password"
  return (
    <input 
      type="password"
      id = {props.id || "password-field"}
      className= {props.className || default_classes}
      style = {props.style || {}}
      placeholder={props.placeholder || ""}
      required 
    />
  )
}


export { Email, Password }; 
