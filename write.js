import { readdirSync, readFileSync } from 'fs';
import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const toBase64 = (file) => {
    const img = readFileSync(file);
    return Buffer.from(img).toString('base64');
};

const imageFiles = readdirSync('./images');

const promises = imageFiles.map(async (imageFile) => {
    const b64 = toBase64(`./images/${imageFile}`);

    await client.data.creator()
    .withClassName('Person')
    .withProperties({
        image: b64,
        text: imageFile.split('.')[0].split('_').join(' '),
    })
    .do();
});

await Promise.all(promises);