import { useContext } from 'react'
import { FeedbackContext } from '../../utility/context/FeedbackContext'

export default function useFeedback() {
  const { 
    alert, 
    alertVisible, 
    backdropVisible, 
    showAlert, 
    setLoader 
  } = useContext(FeedbackContext)

  return { 
    alert, 
    alertVisible, 
    backdropVisible, 
    showAlert, 
    setLoader 
  }
}
