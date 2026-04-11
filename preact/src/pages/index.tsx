import style from '../modules/page.module.css';

export function index() {
	return (
		<div id="page" class={style.page}>
		  <main id="main" class={style.main}>
        <div id="welcome" class={style.welcome}>
          <h1 id="welcome--text" class={'text'}>Welcome</h1>
        </div>
        <form id="login" class={style.login}>
          <h2 class="heading">Login</h2>
          <input class={style.field} name="email" type="email" placeholder="Email.." required/>
          <input class={style.field} name="password" type="password" placeholder="Password.." required /> 
          <button class="btn btn-submit" type="submit">Submit</button>
        </form>
      </main>
    </div>
	);
}

export default index;
