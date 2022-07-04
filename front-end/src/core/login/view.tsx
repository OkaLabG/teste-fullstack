import '../../styles/pages/login.scss'

interface ViewProps {
  currentVisibleForm: 'login' | 'signUp'

  loginEmail: string
  loginPassword: string

  onLoginEmailChange: (event:React.ChangeEvent<HTMLInputElement>) => void
  onLoginPasswordChange: (event:React.ChangeEvent<HTMLInputElement>) => void
  loginSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  
  signUpName: string
  signUpEmail: string
  signUpBirthDate: string
  signUpPassword: string

  onSignUpNameChange: (event:React.ChangeEvent<HTMLInputElement>) => void
  onSignUpEmailChange: (event:React.ChangeEvent<HTMLInputElement>) => void
  onSignUpBirthDateChange: (event:React.ChangeEvent<HTMLInputElement>) => void
  onSignUpPasswordChange: (event:React.ChangeEvent<HTMLInputElement>) => void

  signUpSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onSignUpClick: () => void
  onAlreadyHaveAccountClick: () => void
}

export default function View(props:ViewProps){
  return (
    <main className="login-container">
      <div className="info">
        <h1>Teste Front-end</h1>
        <h2>Imobpower</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam egestas diam non ipsum consequat, in pulvinar nisl congue. 
          Nullam accumsan enim in lacinia tristique. Aliquam erat volutpat. 
          Maecenas aliquet dui eu lectus volutpat, et mattis nulla cursus. 
          Donec eget dui pulvinar, commodo dui ut, lobortis odio. 
        </p>
      </div>
      <div className="card">
        <section id='login-section' className={'card-section ' + (props.currentVisibleForm === 'login' ? 'visible': 'hidden')}>
          <h1 className="card-title">Entre com sua conta</h1>
          <form onSubmit={props.loginSubmit} >
            <input 
              required
              placeholder='Email'
              value={props.loginEmail}
              onChange={props.onLoginEmailChange}
            /> 
            <input 
              required
              type='password' 
              placeholder='Senha'
              value={props.loginPassword}
              onChange={props.onLoginPasswordChange}
            /> 
            <button type='submit'>Entrar</button>
            <p>Não possui conta?</p>
            <button type='button' className="btn-secondary" onClick={props.onSignUpClick}>Crie uma conta agora!</button>
          </form>
        </section>
        <section id='signup-section' className={'card-section ' + (props.currentVisibleForm === 'signUp' ? 'visible': 'hidden')}>
          <p className="card-text">Insira os dados abaixo</p>
          <form onSubmit={props.signUpSubmit}>
            <div className="formgroup">
              <label>Nome</label>
              <input 
                required
                placeholder='Insira seu nome'
                value={props.signUpName}
                onChange={props.onSignUpNameChange}
              /> 
            </div>
            <div className="formgroup">
              <label>Email</label>
              <input 
                required
                placeholder='Insira seu email'
                value={props.signUpEmail}
                onChange={props.onSignUpEmailChange}
              /> 
            </div>
            <div className="formgroup">
              <label>Data de Nascimento</label>
              <input 
                required
                type='date'
                value={props.signUpBirthDate}
                onChange={props.onSignUpBirthDateChange}
              />  
            </div>     
            <div className="formgroup">  
              <label>Senha</label>
              <input 
                required
                type='password' 
                placeholder='Insira sua senha'
                value={props.signUpPassword}
                onChange={props.onSignUpPasswordChange}
              /> 
            </div>
            <button type='submit'> Registrar </button>
            <p>Já possui uma conta?</p>
            <button type='button' className="btn-secondary" onClick={props.onAlreadyHaveAccountClick}>Entrar com minha conta</button>
          </form>
        </section>
      </div>
    </main>
  )
}