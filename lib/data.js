//importing filesystem module
import fs from 'fs';
//path module
import path from 'path';



//path will be used to making a file path to data sub directory
// .cwd = currently working directory. process.cwd will send back the string of the currently working directory.
//using path.join to merge the directories together
const dataDirectory = path.join(process.cwd(), "data" );

    //get file path to json file
    //going to join the data directory path with json file

// create function to return all ids in json files in an array
  //***you do this to get data to use in getStaticPaths() function***
export function getAllIds(){

  //get file path to json file
    //going to join the data directory path with json file
  const filePath1 = path.join(dataDirectory, "json1.json" )
  const filePath2 = path.join(dataDirectory, "json2.json" )

  //read file and save as a string
  const jsonStringData1= fs.readFileSync( filePath1, "utf8");
  const jsonStringData2= fs.readFileSync( filePath2, "utf8");

  //turn the string data from jsonStringData into an json array object
  const jsonObj1 = JSON.parse(jsonStringData1);
  const jsonObj2 = JSON.parse(jsonStringData2);

  let main = jsonObj1.concat(jsonObj2)

  //use .map() to create a new array from json that uses the id's of each object fromt he json file
  const returnData = main.map(item =>{
      return {
        //next.js wants to see it set up liek this using params
        params : {
          //will go and ONLY take the id from the item json file
          id: item.id.toString()
        }
      }
    });
  console.log(returnData);
  return returnData;
};

//create a function to get the list of ids sorted by the names alphabetically
  //this will be used to feed into the getStaticProps() function
export function getSortedList(){
  //get file path to json file
    //going to join the data directory path with json file
  const filePath1 = path.join(dataDirectory, "json1.json" )
  const filePath2 = path.join(dataDirectory, "json2.json" )

  //read file and save as a string
  const jsonStringData1= fs.readFileSync( filePath1, "utf8");
  const jsonStringData2= fs.readFileSync( filePath2, "utf8");

  //turn the string data from jsonStringData into an json array object
  const jsonObj1 = JSON.parse(jsonStringData1);
  const jsonObj2 = JSON.parse(jsonStringData2);

  let main = jsonObj1.concat(jsonObj2)

  //sort array by name
  main.sort(function (a, b){
    return a.character.localeCompare(b.character);
  });

  return main.map(item =>{
    return{
      id: item.id.toString(),
      character: item.character
    }
  });
}

//create ansync function to get complete data for ONE character from characters.json
export async function getData(idRequested){
  //get file path to json file
    //going to join the data directory path with json file
  const filePath1 = path.join(dataDirectory, "json1.json" )
  const filePath2 = path.join(dataDirectory, "json2.json" )

  //read file and save as a string
  const jsonStringData1= fs.readFileSync( filePath1, "utf8");
  const jsonStringData2= fs.readFileSync( filePath2, "utf8");

  //turn the string data from jsonStringData into an json array object
  const jsonObj1 = JSON.parse(jsonStringData1);
  const jsonObj2 = JSON.parse(jsonStringData2);

  let main = jsonObj1.concat(jsonObj2)

  //find the object value in the array that has the matching id
    //.filter() will return the array with one element
  const objMatch = main.filter(obj =>{
    return obj.id.toString()===idRequested;
    }
  );

  //extract object value in filtered array if any
  let objReturned;
  if(objMatch.length > 0){
    objReturned = objMatch[0];
  } else{
      objReturned = {};
    }
  console.log("\nreturning getData()")
  console.log(objReturned);
  
  return objReturned; //this will be sent back to [id].js
}