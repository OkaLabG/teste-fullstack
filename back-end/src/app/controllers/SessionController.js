const jwt = require('jsonwebtoken')
const UserRepository = require('../repositories/UserRepository')
const { sha512 } = require('../../utility/functions')
const dotenv = require('dotenv')
dotenv.config()

class SessionController {
  async validateToken(request, response) {
    try {
      const userJwt = request.headers['authorization'];
      
      if(!userJwt) {
        response.status(403).json({ error: 'Invalid JSON Web Token'})
      }

      jwt.verify(userJwt.split(' ')[1], process.env.TOKEN_SECRET, (error, userInfo) => {
        if (error) {
          response.status(403).end();
          return;
        }

        response.json(userInfo);
      });
    } catch(error) {
      response.status(500).json({ error: 'Internal Server Error'})
    }
  }


  async authenticate(request, response) {
    try {
      const { email, password } = request.body

      const user = await UserRepository.findByEmail(email)
  
      if(!user) {
        return response.status(400).json({ error: 'User not found' })
      }
  
      const passwordAndSalt = sha512(password, user.password_salt)
  
      if(passwordAndSalt.hash !== user.password_hash){
        return response.status(401).json({ error: 'Invalid password' })
      }
  
      const token = jwt.sign(
        { 
          id: user.id,
          name: user.name, 
          birthDate: user.birth_date,
          email, 
        }, 
        process.env.TOKEN_SECRET, 
        { expiresIn: '1h' }
      )
  
      response.json({ token })
    } catch(error) {
      response.status(500).json({ error: 'Internal Server Error'})
    }
  }
}

module.exports = new SessionController()