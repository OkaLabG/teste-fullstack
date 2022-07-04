
import { AlertType } from '../../utility/interfaces'

interface AlertProps {
  message: string,
  type: AlertType,
  visible: boolean
}

export default function Alert(props:AlertProps) {
  return <div className={'alert ' + props.type + (props.visible ? '' : ' hidden')}>
    <span className='alert-icon'/>
    <span>{props.message}</span>
  </div>
}