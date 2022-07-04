import Fetcher from '../../configs/fetcher'
import { parseJwt } from '../../utility/functions'

export default class Model {
  async verifyToken() {
    try {
      const token = localStorage.getItem('token')
      const response = await Fetcher.get('/sessions', { 'Authorization': 'Bearer ' + token })

      return response.status
    } catch(error) {
      console.log(error)
      return 0
    }
  }

  getUserInfoFromToken() {
    try {
      const token = localStorage.getItem('token')

      if(token) 
        return parseJwt(token)
      
    } catch(error) {
      console.log(error)
    }
  }

  eraseToken() {
    localStorage.clear()
  }
}
