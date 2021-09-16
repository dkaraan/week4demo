//importing filesystem module
import fs from 'fs';
//path module
import path from 'path';

//path will be used to making a file path to data sub directory
// .cwd = currently working directory. process.cwd will send back the string of the currently working directory.
//using path.join to merge the directories together
  //so this would create the url: https://cs5513-week04-dk6.srjcethanwilde.repl.co/api/get
const dataDirectory = path.join(process.cwd(), "data" );


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {

  //going to joing the datadirectory path with json file
  const filePath = path.join(dataDirectory, "characters.json" );

  //using sync 
  const jsondata = fs.readFileSync( filePath, "utf8");

  //create an array of object values from the parsed json file
  const jsonObj = JSON.parse( jsondata );

  //.sort() the jsonObj lets do by character alphabetically
  jsonObj.sort(
    function( a, b ){
      return a.character.localeCompare(b.character);
    }
  );
  
  res.status(200).json( jsonObj);
}
