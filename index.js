import weaviate from 'weaviate-ts-client';

const client = new weaviate.Client({
    scheme: 'http',
    host: 'localhost',
    port: 8080,
    pathPrefix: '/v1'
});