export type AlertType = 'success' | 'warning' | 'error' | 'info'

export type Alert = {
  message:string, 
  type: AlertType
}