import { createConnection } from 'typeorm';

// eslint-disable-next-line
createConnection().then(() => console.log('📦 successful database connection'));
