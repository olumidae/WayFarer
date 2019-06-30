import express from 'express';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import bodyParser from 'body-parser';
import router from './server/routes/routes';


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', router);

const PORT = process.env.port || 6000;
app.listen(PORT, console.log(`Server running at ${PORT}!`));

export default app;
