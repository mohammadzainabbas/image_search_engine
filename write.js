import { readdirSync } from 'fs';

const imageFiles = readdirSync('./images');

console.log(imageFiles);