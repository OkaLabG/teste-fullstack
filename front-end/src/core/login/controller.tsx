import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFeedback from '../../utility/hooks/useFeedback'
import View from './view'

interface ControllerProps { 
  model: {
    loginSubmit: (email:string, password:string) => Promise<number>
    verifyToken: () => Promise<number>
    signUpSubmit: ({
      name, 
      email, 
      birthDate, 
      password
    }:{
      name:string
      email: string
      birthDate: string
      password: string
    }) => Promise<number>
  }
}

export default function Controller({ model }:ControllerProps) {
  const navigate = useNavigate()
  const { showAlert, setLoader } = useFeedback()

  const [currentVisibleForm, setCurrentFormVisible] = useState<'login'| 'signUp'>('login')

  const [loginEmail, setLoginEmail] = useState<string>('')
  const [loginPassword, setLoginPassword] = useState<string>('')

  const [signUpName, setSignUpName] = useState<string>('')
  const [signUpEmail, setSignUpEmail] = useState<string>('')
  const [signUpBirthDate, setSignUpBirthDate] = useState<any>('')
  const [signUpPassword, setSignUpPassword] = useState<string>('')

  const inputHandler = <T,>(stateSetter:React.Dispatch<T>, value:T) => stateSetter(value)

  const onCreateAccountClick = () => setCurrentFormVisible('signUp')
  const onAlreadyHaveAccountClick = () => setCurrentFormVisible('login')

  const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoader(true)
    
    const requestStatus = await model.loginSubmit(loginEmail, loginPassword)

    setLoader(false)

    if(requestStatus === 401) {
      showAlert('Senha inválida!', 'warning')
      return
    }

    if(requestStatus === 400) {
      showAlert('Usuário não encontrado.', 'warning')
      return
    }

    if(requestStatus === 200) {
      navigate('/home')
    } else {
      showAlert('Um erro ocorreu ao tentar logar. Tente novamente', 'error')
    }
  }

  const signUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoader(true)

    const requestStatus = await model.signUpSubmit({
      name: signUpName,
      email: signUpEmail, 
      birthDate: signUpBirthDate, 
      password: signUpPassword
    })

    if(requestStatus === 400) {
      showAlert('Este email já está cadastrado', 'info')
    }

    if(requestStatus === 200) {
      showAlert('Cadastrado com sucesso!', 'success')
      setCurrentFormVisible('login')
    }
    
    setLoader(false)
  }

  const verifyToken = useCallback(async () => {
    if(!localStorage.getItem('token')) return 
    
    setLoader(true)
    const requestStatus = await model.verifyToken()

    if(requestStatus !== 200) 
      showAlert('Token inválido. Logue novamente.', 'error')
    else 
      navigate('/home')
  
    setTimeout(() => setLoader(false), 500)
  },[model, setLoader, showAlert, navigate])

  useEffect(() => {
    verifyToken()
  }, [verifyToken])

  return (
    <View    
      currentVisibleForm={currentVisibleForm}
      
      loginEmail={loginEmail}
      loginPassword={loginPassword}
      onLoginEmailChange={(event: React.ChangeEvent<HTMLInputElement>) => inputHandler(setLoginEmail, event.target.value)}
      onLoginPasswordChange={(event: React.ChangeEvent<HTMLInputElement>) => inputHandler(setLoginPassword, event.target.value)}
      loginSubmit={loginSubmit}

      signUpName={signUpName}
      signUpEmail={signUpEmail}
      signUpBirthDate={signUpBirthDate}
      signUpPassword={signUpPassword}
   
      onSignUpNameChange={(event: React.ChangeEvent<HTMLInputElement>) => inputHandler(setSignUpName, event.target.value)}
      onSignUpEmailChange={(event: React.ChangeEvent<HTMLInputElement>) => inputHandler(setSignUpEmail, event.target.value)}
      onSignUpBirthDateChange={(event: React.ChangeEvent<HTMLInputElement>) => inputHandler(setSignUpBirthDate, event.target.value)}
      onSignUpPasswordChange={(event: React.ChangeEvent<HTMLInputElement>) => inputHandler(setSignUpPassword, event.target.value)}

      signUpSubmit={signUpSubmit}
      onSignUpClick={onCreateAccountClick}
      onAlreadyHaveAccountClick={onAlreadyHaveAccountClick}
    />
  )
}