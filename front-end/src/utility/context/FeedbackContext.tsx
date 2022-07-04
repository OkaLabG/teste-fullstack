import { createContext, ReactNode, useCallback, useState } from 'react'
import { AlertType, Alert } from '../interfaces'

interface FeedbackContextProps {
  children: ReactNode
}

export const FeedbackContext = createContext<{
  alert: Alert,
  alertVisible: boolean, 
  backdropVisible: boolean,
  showAlert: (message:string, type:AlertType) => void,
  setLoader: (value:boolean) => void
}>({
  alert: { message: '', type: 'info' },
  alertVisible: false, 
  backdropVisible: false,
  showAlert: (message:string, type:AlertType) => {},
  setLoader: (value:boolean) => {}
})

export default function FeedbackContextProvider({ children }: FeedbackContextProps){
  const [alert, setAlert] = useState<Alert>({ message: '', type: 'info' })
  const [alertVisible, setAlertVisible] = useState<boolean>(false)
  const [backdropVisible, setBackdropVisible] = useState<boolean>(false)

  const showAlert = useCallback((message:string, type:AlertType) => {
    setAlert({ message, type })
    setAlertVisible(true)
    setTimeout(() => setAlertVisible(false), 3000)
  }, [])

  const setLoader = useCallback((value:boolean) =>  setBackdropVisible(value), [])

  return <FeedbackContext.Provider value={{ alert, alertVisible, backdropVisible, showAlert, setLoader}}>
    {children}
  </FeedbackContext.Provider>
}
