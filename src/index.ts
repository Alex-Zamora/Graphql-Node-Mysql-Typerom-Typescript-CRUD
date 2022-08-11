import app from "./app";
import { AppDataSource } from './db';
import { PORT } from './config';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Database initialized');
    app.listen(PORT);
    console.log("listening on port 3000 ", PORT);
  } catch (error) {
    console.error(error);
    
  }
}

main();


