const db = require('../../database')

class UserRepository {
  async findAll(){
    const users = await db.query("SELECT * FROM users")
    return users
  }

  async findById(id) {
    const [ user ] = await db.query(
      "SELECT * FROM users WHERE ID = $1", 
      [id]
    )
    return user
  }

  async findByEmail(email){
    const [ user ] = await db.query(
      "SELECT * FROM users WHERE email = $1", 
      [email]
    )
    return user
  }

  async create({ name, email, birthDate, passwordAndSalt }) {
    const [ user ] = await db.query(
      `INSERT INTO users(name, email, birth_date, password_hash, password_salt)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;`, 
      [name, email, birthDate, passwordAndSalt.hash, passwordAndSalt.salt]
    )

    return user
  }

  async update(id, userInfo) {
    const [ user ] = await db.query(
      `UPDATE users SET name=$1, email=$2, password=$3
      WHERE id = $4 
      RETURNING *;`,
      [userInfo.name, userInfo.email, userInfo.password, id]
    )
    return user
  }

  async delete(id) {
    await db.query("DELETE FROM users WHERE id = $1", [id])
  }
}

module.exports = new UserRepository()