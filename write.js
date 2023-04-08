import { readdirSync } from 'fs';
import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const imageFiles = readdirSync('./images');

const promises = imageFiles.map(async (imageFile) => {
    const b64 = toBase64(`./images/${imageFile}`);

    await client

console.log(imageFiles);