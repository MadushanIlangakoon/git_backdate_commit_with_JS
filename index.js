const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PARTH = './data.json'

const DATE = moment().format();

const data={
    date:DATE
}

jsonfile.writeFile(FILE_PARTH, data);

simpleGit().add([FILE_PARTH]).commit(DATE, {'--date': DATE}).push();