import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import usersRoutes from './routes/users.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API protegida con API key' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo ${PORT}`);
});
