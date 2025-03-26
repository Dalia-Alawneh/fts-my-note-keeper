import connectDB from '../database/index.js';
import noteRouter from './modules/note/note.router.js';
import cors from 'cors';

const initApp = (app, express) => {
  connectDB();
  app.use(express.json());
  app.use(cors());
  app.use('/notes', noteRouter)
  app.use('/*', (req, res) => {
    return res.json({ message: "page not found" });
  })
}

export default initApp;