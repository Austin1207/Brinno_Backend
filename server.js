import express from "express";
import { imgUploadURL, pdfUploadURL, jsonUploadURL } from './s3.js';
import cors from "cors";

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dataRoutes from './routes/datas.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());

app.get('/s3ImgUrl', async (req, res) => {
    const url = await imgUploadURL();
    res.send({url})
})

app.get('/s3PdfUrl', async (req, res) => {
    const url = await pdfUploadURL();
    res.send({url})
})

app.get('/s3jsoninputUrl', async (req, res) => {
    const url = await jsonUploadURL();
    res.send({url})
})

app.use('/datas', dataRoutes);

const CONNECTION_URL = "mongodb+srv://react-1227:as860302@yuchungettingstarted.knkcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// app.listen(3000, () => console.log("Listening on port 3000"));