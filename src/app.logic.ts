import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b:base, l:limit, s:show } = yarg;

/*const base: number = yarg.b;
const limit: number = yarg.l;
const show: boolean = yarg.s;*/

const tableHeader: string = `
    ====================
        Tabla del ${ base }
    ====================

`;

let tableBody = '';

for( let i = 1; i <= limit; i++){
    tableBody += `      ${ base } x ${ i } = ${ base * i }\n`
}

const tablePath: string = `./outputs/tabla-${ base }.txt`;


try {
    if (!fs.existsSync('./outputs')) {
      fs.mkdirSync('./outputs');
    }
} catch ( err ) {
    console.error(err);
}

fs.writeFile(tablePath, tableHeader + tableBody, ( err ) => {
    if ( err ) throw err;
  console.log('Saved!');
})

if (show) {
    console.log( tableHeader + tableBody );
}
