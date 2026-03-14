import {Submit} from '../controls/buttons.tsx'; 
import { Form } from '../../ui/forms.tsx';
function Login() {
  return (
    <Form id="login--form" className="auth-form">
          <input 
            id="login--email"
            name="email" 
            type="email" 
            className="form-control" 
            placeholder={placeholder.email}
            required />
          <input 
            id="login--password"
            name="password" 
            type="password" 
            className="form-control" 
            placeholder={placeholder.password} 
            required />
        <Submit id={"login-submit"} label={"Submit!"}/>
    </Form>
  ) 
}

export default Login;
