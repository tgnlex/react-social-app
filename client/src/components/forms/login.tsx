import { Email, Password } from './controls/fields';
import {Submit} from './controls/buttons'; 


function Login(props: { className?: string }) {
  return (
    <form id="login--form" className={props.className || ""}>
        <h2>Login</h2>
        <Email id="login--email" placeholder={"Email"} />
        <Password id="login--password" placeholder={"Password"} />
        <Submit id={"login-submit"} label={"Submit!"} />
    </form>
  ) 
}

export default Login;
