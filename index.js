import weaviate from 'weaviate-ts-client';

const client = weaviate.Client({
    scheme: 'http',
    host: 'localhost:8080',
});

const schemaRes = await client.schema.getter().do();

console.log(schemaRes);