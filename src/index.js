/**
 * SCSS
 */
import './styles/main.scss';


/**
 * Auto find and import all .ts file in Shopify folder
 */
const tsFiles = require.context('Shopify/', true, /\.js$/);
tsFiles.keys().forEach(tsFiles);

console.log('kmacoders developing..');
