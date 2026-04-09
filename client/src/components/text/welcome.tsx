
function Welcome(props: { className?: string}) {
  return (
    <div className={props.className || "welcome"}>
      <h1 className={"text"}>Welcome</h1>
    </div>
  )
}

export default Welcome;
