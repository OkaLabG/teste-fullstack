const UserRepository = require('../repositories/UserRepository')
const { hashPassword } = require('../../utility/functions')

class UserController {
  async getAll(request, response) {
    try {
      const users = await UserRepository.findAll();
      response.json(users);

    } catch(error) {
      response.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async getById(request, response) {
    try {
      const { id } = request.params;
      const user = await UserRepository.findById(id);

      if (!user) {
        return response.status(404).json({ error: 'User not found' });
      }

      response.json(user);

    } catch(error) {
      response.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async create(request, response) {
    try {
      const { name, password, email, birthDate } = request.body;

      if (!name) {
        return response.status(400).json({ error: 'Name is required' });
      }

      const userExists = await UserRepository.findByEmail(email);

      if (userExists) {
        return response.status(400).json({ error: 'Email already exists' });
      }

      const passwordAndSalt = hashPassword(password)

      const user = await UserRepository.create({ 
        name, 
        email,
        birthDate,
        passwordAndSalt
      });

      response.json(user);
    } catch(error) {
      console.log(error)
      response.status(500).json({ error: 'Internal Server Error' })
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      const user = await UserRepository.findById(id);

      if (!user) {
        return response.status(404).json({ error: 'User not found' });
      }

      await UserRepository.delete(id);
      response.sendStatus(204);
      
    } catch(error) {
      response.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

module.exports = new UserController()
