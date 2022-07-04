import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { parseDate } from '../../utility/functions'
import useFeedback from '../../utility/hooks/useFeedback'
import View from './view'

interface ControllerProps {
  model: {
    verifyToken: () => Promise<number>
    getUserInfoFromToken: () => any
    eraseToken: () => void
  }
}

export default function Controller({ model }:ControllerProps) {
  const navigate = useNavigate()
  const { showAlert, setLoader } = useFeedback()

  const [userInfo, setUserInfo] = useState<{
    name:string, 
    email:string, 
    birthDate:string
  }>({
    name: '', 
    email: '', 
    birthDate: ''
  })

  const onVerifyTokenClick = async () => {
    setLoader(true)
    const requestStatus = await model.verifyToken()

    if(requestStatus !== 200) 
      showAlert('Token inválido. Logue novamente.', 'error')
    else 
      showAlert('Token válido!', 'success')

    setTimeout(() => setLoader(false), 1000)
  }

  const onLogoutClick = () => {
    model.eraseToken()
    navigate('/')
  }

  const getUserInfoFromToken = useCallback(() => {
    const payload = model.getUserInfoFromToken()

    if(payload) {
      setUserInfo({
        name: payload.name,
        email: payload.email,
        birthDate: parseDate(payload.birthDate)
      })
    }
  }, [model])

  useEffect(() => {
    getUserInfoFromToken()
  }, [getUserInfoFromToken])

  return (
    <View    
      userInfo={userInfo}
      onVerifyTokenClick={onVerifyTokenClick}
      onLogoutClick={onLogoutClick}
    />
  )
}
