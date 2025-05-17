import express from 'express';
import userRoutes from './routes/user.route';
import { setupSwagger } from './docs/swagger';
import ExampleController from './controllers/example.controller';

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(express.json());
app.use(userRoutes);
app.use(router);

const exampleCtrl = new ExampleController();
exampleCtrl.registerRoutes(router);

setupSwagger(app);

app.get('/', (_, res) => {
  res.send('Hello from TypeScript backend!');
});

try {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
  });
} catch (err) {
  console.error('Failed to start server:', err);
}
