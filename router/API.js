const express = require("express");
const router = express.Router();
var bodyParser = require('body-parser')
const axios = require('axios');
router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())

class API {

async getTest(){
      
    return await axios({
        method: 'get',
      maxBodyLength: Infinity,
        url: 'https://jsonplaceholder.typicode.com/users',
        headers: { }
      })
      .then(function (response) {

        // console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}


}

module.exports = new API;