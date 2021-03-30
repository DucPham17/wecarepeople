const path = require('path')

const { Storage } = require('@google-cloud/storage');
const serviceKey = path.join(__dirname, '../../key.json')
// Instantiate a storage client
const storage = new Storage({
    keyFilename: serviceKey,
    projectId: 'wecarepeople',
});

const bucket = storage.bucket('wecarepeople');
exports.uploadImage = (file) => new Promise((resolve, reject) => {
    const { originalname, buffer } = file
  
    const blob = bucket.file(originalname.replace(/ /g, "_")+Date.now());
    const blobStream = blob.createWriteStream({
      resumable: false
    })
    blobStream.on('finish', () => {
      const publicUrl = 
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      
      resolve(publicUrl)
    })
    .on('error', () => {
      reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
  })

