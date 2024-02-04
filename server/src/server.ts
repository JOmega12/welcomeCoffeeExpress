import express from 'express';
import { coffeeRouter } from '../router/coffeeRouter';

const app = express();

app.use(express.json());

app.use("/coffee", coffeeRouter);

// this launches the port 3000
app.listen(3000, () => {
  console.log('Server ready at port 3000')
});