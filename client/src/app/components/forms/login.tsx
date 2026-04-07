import { Email, Password } from '../controls/fields.tsx';
import {Submit} from '../controls/buttons.tsx'; 

import { Form } from '../../ui/forms.tsx';

function Login() {
  return (
    <Form id="login--form" className={"login"}>
        <h2>Login</h2>
        <Email id="login--email" placeholder={"Email"} />
        <Password id="login--password" placeholder={"Password"} />
        <Submit id={"login-submit"} label={"Submit!"} />
    </Form>
  ) 
}

export default Login;
