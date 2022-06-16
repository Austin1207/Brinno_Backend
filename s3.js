const aws = require("aws-sdk");
const dotenv = require("dotenv"); 
const crypto = require("crypto");
const {promisify} = require("util");
const randomBytes = promisify(crypto.randomBytes);

dotenv.config();

const imgBucketName = process.env.AWS_IMG_BUCKET_NAME;
const pdfBucketName = process.env.AWS_PDF_BUCKET_NAME;
const jsonInputBucketName = process.env.AWS_JSONINPUT_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

async function imgUploadURL() {
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex') + ".png";

    const params = ({
        Bucket: imgBucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

async function pdfUploadURL() {
    const rawBytes = await randomBytes(16);
    const pdfName = rawBytes.toString('hex') + ".pdf";

    const params = ({
        Bucket: pdfBucketName,
        Key: pdfName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

async function jsonUploadURL() {
    const rawBytes = await randomBytes(16);
    const jsonInputName = rawBytes.toString('hex') + ".txt";

    const params = ({
        Bucket: jsonInputBucketName,
        Key: jsonInputName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

module.exports = imgUploadURL;
module.exports = pdfUploadURL;
module.exports = jsonUploadURL;