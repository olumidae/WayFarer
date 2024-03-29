import express from 'express';
import cors from 'cors';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import router from './routes/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors('*'));

// use swagger-Ui-express for your app documentation endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1', router);


app.listen(PORT, console.log(`Server running at port ${PORT}!`));

export default app;
