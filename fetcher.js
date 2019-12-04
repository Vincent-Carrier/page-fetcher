const request = require("request");
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3] ? process.argv[3] : 'myCoolNewFile.html'

request.get(url, (err, response, body) => {
    fs.writeFile(path, body, () => {
      console.log(`Downloaded and saved to ${path}`);
    })
})
