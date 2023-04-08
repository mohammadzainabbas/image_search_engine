import { readdirSync, readFileSync, writeFileSync } from 'fs';
import weaviate from 'weaviate-ts-client';

const LIMIT = 5;

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const toBase64 = (file) => {
    const img = readFileSync(file);
    return Buffer.from(img).toString('base64');
};

const testImageFiles = readdirSync('./test');

const promises = testImageFiles.map(async (imageFile) => {
    const test_b64 = toBase64(`./test/${imageFile}`);

    const resImage = await client.graphql.get()
    .withClassName('Person')
    .withFields(['image'])
    .withNearImage({ image: test_b64 })
    .withLimit(LIMIT)
    .do();

    console.log(resImage);
}

await Promise.all(promises);
