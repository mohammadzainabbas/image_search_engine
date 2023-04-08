import weaviate from 'weaviate-ts-client';

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const schemaConfig = {
    'class': 'Person',
    'vectorizer': 'img2vec-neural',
    'vectorIndexType': 'hnsw',
    'moduleConfig': {
        'image2vec-neural': {
            'imageFields': ['image'],
        },
    },
    'properties': [
        {
            'name': 'image',
            'dataType': ['blob'],
        },
        {
            'name': 'text',
            'dataType': ['string'],
        }
    ],
};

// Update the schema (roughly equivalent to the database migration)
await client.schema.classCreator().withClass(schemaConfig).do();

const schemaRes = await client.schema.getter().do();

console.log(schemaRes);