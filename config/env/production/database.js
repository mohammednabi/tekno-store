// // path: ./config/env/production/database.js

// // const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   // const { host, port, database, user, password } = parse(env("DATABASE_URL"));

//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host:env(''),
//         port,
//         database,
//         user,
//         password,
//         ssl: { rejectUnauthorized: false },
//       },
//       debug: false,
//     },
//   };
// };

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
    pool: { min: 0 },
  },
});
