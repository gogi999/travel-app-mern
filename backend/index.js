import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import pinRoutes from './routes/pin.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/pins', pinRoutes);
app.use('/api/users', userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at port ${port}...`);
    });
    console.log('MongoDB successfully connected!')
  })
  .catch((err) => {
    console.log('Error connecting MongoDB!', err);
  });
