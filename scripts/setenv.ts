const { writeFile } = require('fs');
const { argv } = require('yargs'); // read environment variables from .env file
require('dotenv').config(); // read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = `./src/environments/environment.custom.ts`; // we have access to our environment variables
// in the process.env object thanks to dotenv

const environmentFileContent = isProduction
  ? `export const environment = {
   production: true,
   API_KEY_IMAGE4IO: "${process.env?.['API_KEY_IMAGE4IO']}",
   API_SECRET_IMAGE4IO: "${process.env?.['API_SECRET_IMAGE4IO']}",
   API_URL_IMAGE4IO: "${process.env?.['API_URL_IMAGE4IO']}",
   NODE_VERSION: "${process.env?.['NODE_VERSION']}",
   SITE_ID: "${process.env?.['SITE_ID']}",
   API_KEY_NETLIFY: "${process.env?.['API_KEY_NETLIFY']}",
   URL: "${process.env?.['URL']}",
};`
  : `export const environment = {
   production: false,
   API_KEY_IMAGE4IO: "${process.env?.['API_KEY_IMAGE4IO']}",
   API_SECRET_IMAGE4IO: "${process.env?.['API_SECRET_IMAGE4IO']}",
   API_URL_IMAGE4IO: "${process.env?.['API_URL_IMAGE4IO']}",
   NODE_VERSION: "${process.env?.['NODE_VERSION']}",
   SITE_ID: "${process.env?.['SITE_ID']}",
   API_KEY_NETLIFY: "${process.env?.['API_KEY_NETLIFY']}",
   URL: "${process.env?.['URL']}",
};`; // write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
