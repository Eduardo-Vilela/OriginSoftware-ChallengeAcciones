export const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      timezone: "America/Argentina/Buenos_Aires",
      database: 'challenge_action'
    }
})