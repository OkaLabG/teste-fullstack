import Fetcher from '../../configs/fetcher'

interface SignUpSubmitParams {
  name:string
  email: string
  birthDate: string
  password: string
}

export default class Model {
  async loginSubmit(email:string, password:string) {
    try {
      const response = await Fetcher.post('/sessions', { email, password })

      if(response.status === 200) {
        localStorage.setItem('token', response.data.token)
      }

      return response.status

    } catch(error) {
      console.log(error)
      return 0
    }
  }

  async signUpSubmit({ name, email, birthDate, password }: SignUpSubmitParams) {
    try {
      const response = await Fetcher.post('/users', {name, email, password, birthDate })
      return response.status

    } catch(error) {
      console.log(error)
      return 0
    }
  }

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
}

