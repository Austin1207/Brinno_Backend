const express = require("express");
const imgUploadURL = require("./s3.js");
const pdfUploadURL = require("./s3.js");
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

app.listen(3000, () => console.log("Listening on port 3000"));