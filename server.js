const express = require("express");
const UploadURL = require("./s3.js");
const imgUploadURL = UploadURL.ImgMethod;
const pdfUploadURL = UploadURL.PdfMethod;
const jsonUploadURL = UploadURL.JsonMethod;
const cors = require("cors");

const app = express();

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

app.listen(3000, () => console.log("Listening on port 3000"));