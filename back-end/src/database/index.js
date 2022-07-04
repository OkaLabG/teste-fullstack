const { Client } = require('pg')

const client = new Client({
  host: 'postgres',
  port: 5432,
  user: 'postgres',
  password: '123',
  database: 'imobpower_test'
})

client.connect()

exports.query = async (query, bindings) => {
  const { rows } = await client.query(query, bindings)
  return rows
}