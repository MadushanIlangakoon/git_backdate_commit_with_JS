const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const {Random} = require('random-js');
const FILE_PARTH = './data.json'

const random = new Random();

const makeCommit = n=>{
    if(n==0) return simpleGit().push();
    const x = random.integer(0,52);
    const y = random.integer(0,6);
    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();
    console.log("value of x:",x );
    console.log("value of y:",y );
  //  const DATE = moment().format();

    const data={
        date:DATE
    }
    console.log(DATE);
    console.log(DATE);
    jsonfile.writeFile(FILE_PARTH, data , ()=> {
        simpleGit().add([FILE_PARTH]).commit(DATE, {'--date': DATE} , makeCommit.bind(this,--n)); 
    });





}
makeCommit(500);
