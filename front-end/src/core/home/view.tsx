import '../../styles/pages/home.scss'

interface ViewProps {
  userInfo: {
    name:string, 
    email:string, 
    birthDate:string
  }
  onVerifyTokenClick: () => Promise<void>
  onLogoutClick: () => void
}

export default function View(props:ViewProps){
  return <>
    <div className="home-container">
      <main className="card">
        <h1> Olá {props.userInfo.name}!</h1>
        <p> Você foi autenticado com sucesso. </p>
        <p> Seu email: {props.userInfo.email}</p>
        <p> Sua data de nascimento: {props.userInfo.birthDate}</p>
        <button className="btn-primary" onClick={props.onVerifyTokenClick}>Verificar token</button>
        <button className="btn-secondary" onClick={props.onLogoutClick}>Sair da conta</button>
      </main>
    </div>
  </>
}
