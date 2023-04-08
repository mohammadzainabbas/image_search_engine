import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const schemaRes = await client.schema.getter().do();

console.log(schemaRes);

const schemaConfig = {
    'class': 'Person',
    'vectorizer': 'img2vec-neural',
    'vectorIndexType': 'hnsw',
    
