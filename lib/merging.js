    //get file path to json file
    //going to join the data directory path with json file
let rawdata = fs.readFileSync('json1.json');
let student = JSON.parse(rawdata);

let rawdata2 = fs.readFileSync('json2.json');
let student2 = JSON.parse(rawdata2);

const student3 = student.concat(student2);
