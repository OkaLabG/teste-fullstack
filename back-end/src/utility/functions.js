const crypto = require('crypto')

function generateSalt(){
  return crypto.randomBytes(16).toString('hex')
}

function sha512(password, salt){
  let hash = crypto.createHmac('sha512', salt)
  hash.update(password)
  hash = hash.digest('hex')
  
  return { salt, hash };
};

function hashPassword(password) {
  return sha512(password, generateSalt())
}

module.exports = {
  generateSalt,
  sha512,
  hashPassword
}