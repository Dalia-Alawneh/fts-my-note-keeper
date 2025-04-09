import connectDB from './utils/connectMongoDB.js';
import noteRouter from './modules/note/note.router.js';
import cors from 'cors';

const initApp = (app, express) => {
  connectDB();
  app.use(express.json());
  app.use(cors());
  app.use('/notes', noteRouter)
  app.use('/*', (req, res) => {
    return res.status(404).json({ message: "page not found" });
  })
}

export default initApp;