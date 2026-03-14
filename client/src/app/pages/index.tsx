import { Login } from '../ui'

function Index() {
  const placeholder = {email: 'Email Address', password: 'Password'}
  return (
    <main className="main-container">
      {/*** WELCOME TEXT ***/}
       <div className="welcome">
        <h2 className="welcome--text">Welcome</h2>
      </div>

      <Login />
      </main>
  )
};


export default Index;
