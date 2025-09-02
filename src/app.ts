import * as dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import { errorHandler } from './middlewares/errorHandler';
import authRouter from './routes/authRoute';
import companyRouter from './routes/companyRoute';
import userRouter from './routes/userRoute';
import contractRouter from './routes/contractRoute';
import customerRouter from './routes/customerRoute';
import path from 'path';
import imageUploadRouter from './routes/imageUploadRoute';
import contractDocumentRouter from './routes/contractDocumentRoute';
import carRouter from './routes/carRoute';

import fs from 'fs';

dotenv.config();

const isServerless = !!process.env.VERCEL;
const PUBLIC_DIR = isServerless ? '/tmp/public' : path.resolve('public');
const DOC_DIR = isServerless ? '/tmp/document' : path.resolve('document');
if (!isServerless) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    fs.mkdirSync(DOC_DIR, { recursive: true });
}

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/health', (req, res) => {
    res.status(200).send('OK');
});
app.use('/auth', authRouter);
app.use('/companies', companyRouter);
app.use('/users', userRouter);
app.use('/customers', customerRouter);
app.use('/contracts', contractRouter);
app.use('/cars', carRouter);

app.use('/images', imageUploadRouter);
app.use('/images', express.static(path.resolve('public'))); //정적 파일 루트 제공
app.use('/contractDocuments', contractDocumentRouter);
app.use('/contractDocuments', express.static(path.resolve('document')));

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => console.log('Server Starting...'));
