import mysql from 'mysql2/promise';

// Prevent connection leaks in development due to Next.js hot-reloading
const globalForDb = globalThis as unknown as {
  conn: mysql.Pool | undefined;
};

export const pool =
  globalForDb.conn ??
  mysql.createPool({
    host: 'lovn.your-database.de',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'foliohub_preorder',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

if (process.env.NODE_ENV !== 'production') globalForDb.conn = pool;
