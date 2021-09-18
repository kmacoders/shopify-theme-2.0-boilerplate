// @ts-nocheck

/**
 * SCSS
 */
import './styles/main.scss';

/**
 * TS
 */
import './helpers';

/**
 * Auto find and import all .ts file in Shopify folder
 */
const tsFiles = require.context('Shopify/', true, /\.ts$/);
tsFiles.keys().forEach(tsFiles);

console.log('kmacoders developing..');
