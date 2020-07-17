---
layout: post
title:  "Heroku & Data Persistence With AWS S3"
author: ben
categories: [ Web ]
tags: [ AWS, Data ]
image: assets/images/heroku-poster.jpg
---

If you've ever used [Heroku](https://devcenter.heroku.com/) as a hassle-free way of deploying an app for a project, with an equally hassle-free document based database like [Forerunner](https://github.com/Irrelon/ForerunnerDB), you may have run into their [data persistence issue](https://devcenter.heroku.com/articles/active-storage-on-heroku#:~:text=Heroku%20has%20an%20%E2%80%9Cephemeral%E2%80%9D%20hard,after%20the%20application%20is%20restarted.).

After getting quite deep into a project before I realised this and subsequently feeling quite stressed about it, I wanted to share a simple solution to _hopefully_ help a any peeps in a similar situation!

## Enter AWS

Don't bounce, it's simpler than you think. With a few lines of config code and a few more for saving and loading from an AWS S3 bucket, this was a surprisingly easy fix.

Forerunner, like other document-based DBs or simply saving a .json file yourself, keeps one `.fdb` file in the directory of your project. By simply downloading this file when the server starts up (or in Heroku terms, the dyno fires up!), and uploading it anytime the data changes, we have basically fixed any data persistence issue.

### Setup

6 lines, that's all it takes. But first, we must brave the overwhelming might of AWS; create our S3 bucket; then add a new IAM user with S3 access; and BOOM, we have our 2 access keys.

```javascript
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
```

### Upload

I chose not to upload with the S3 file manager but to upload from my code, and the AWS JS SDK makes it super easy. You don't need to be that familiar with the node File System package, but it is needed to read our db file.
```javascript
const uploadToS3 = () => {
  const dbFileContent = fs.readFileSync(`${DB_FILEPATH}.fdb`)
  // we define the bucket and filepath and use the fs.readFileSync for the body
  const params = {
     Bucket: 'S3_BUCKET',
     Key: 'S3_FILE_LOCATION',
     Body: dbFileContent
  };
  console.log("Starting S3 upload");
  s3.upload(params, function(s3Err, data) {
     if (s3Err) throw s3Err
     // callback when file is completely uploaded
     console.log(`File uploaded successfully at ${data.Location}`)
  }).on("httpUploadProgress", progress => {
	 // big files are split into parts, so this tells us how much has been processed (not how much has uploaded)
     console.log((progress.loaded / progress.total * 100).toFixed(2) + "% upload done;");
  });
}
```
This will start your upload, but depending on your file size, this could take a while. My 15mb db file takes 10-20s locally, but speeds through when uploading from Heroku.

### Download

When the Heroku dyno restarts, any new data that was in the file directory will be lost, so it's important to load up our .json / db file from S3 early on.

```javascript
const loadFromS3 = () => {
  const s3Params = {
    Bucket: 'S3_BUCKET',
    Key: 'S3_FILE_LOCATION',
  };
  const fileStream = require('fs').createWriteStream(`${DB_FILEPATH}.fdb`);
  const s3Stream = s3.getObject(s3Params).createReadStream();
  s3Stream.pipe(fileStream).on('error', function(err) {
    // capture any errors that occur when writing data to the file
    console.error('File Stream:', err);
  }).on('close', function() {
    console.log('Done. DB file downloaded and saved');
    // now I can load from this file with Forerunner or other document based DB library
  });
}
loadFromS3();
```

This will download from S3 straight into the filepath specified in the createWriteStream fs function. This obviously needs to be the same as the upload filepath! There's a few different ways to do this download, but this was my favoured path as it allows for the pipe stream callbacks which are necessary for us to load up our db only after a successful download.

## Clouds are Nice

AWS and Google Cloud can be intimidating. So many services with so many options! But the service rocks. It's cheap (I don't think we pay for less than 1GB in S3), very well documented both by them and the 1000s of other coders, and actually not so overwhelming once you're in and have a specific problem to solve.

Although, I'll be honest: it doesn't feel great to be giving any more cash or kudos to a man/company perpetuating a broken system of wealth inequality. Use with caution, I guess!

!["A tweet from Jeremy Corbyn calling our Jeff Bezos regarding not paying enough taxes"](https://quicksilver.scoopwhoop.com/unsafe/960x500/center/https://s4.scoopwhoop.com/anj2/5ddcc1c350758d3a5e9fbc88/ee662a2d-5bea-4566-867f-285a5cc9aeb1.jpg)
