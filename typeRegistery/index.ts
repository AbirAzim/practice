import { fetchRecord } from './lib/registry';
import { DataTypeRegistry } from './lib/registry';

let d: DataTypeRegistry;

//d.book
//d.magazine

const book = fetchRecord('book', '1');
const magazine = fetchRecord('magazine', '2');

fetchRecord('book', '2');
