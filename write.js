import { readdirSync } from 'fs';

const imageFiles = readdirSync('./images');

const promises = imageFiles.map(async (imageFile) => {
    

console.log(imageFiles);