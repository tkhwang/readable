import * as AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';

export class S3 {
  static async uploadToS3(prefix: string, urlHash: string, buffer: Buffer): Promise<string> {
    const key = `${prefix}/${urlHash}/${new Date().getTime().toString()}.png`;
    const fullS3ImageUrl = `${process.env.AWS_S3_URL_PREFIX}/${key}`;
    const params: PutObjectRequest = {
      Bucket: process.env.AWS_S3_BUCKET || '',
      Key: key,
      Body: buffer,
      ContentType: 'image/png',
    };

    await new AWS.S3({
      accessKeyId: process.env.AWS_IAM_USER_KEY,
      secretAccessKey: process.env.AWS_IAM_USER_SECRET,
    })
      .putObject(params)
      .promise();

    return fullS3ImageUrl;
  }
}
