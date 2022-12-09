const fs = require('fs');
const { Console } = require('@woowacourse/mission-utils');

const FileReader = {
  read(src, callback) {
    fs.readFile(src, 'utf8', (error, data) => {
      if (error) {
        Console.print(error);
        return;
      }
      callback(data);
    });
  },
};

module.exports = FileReader;
