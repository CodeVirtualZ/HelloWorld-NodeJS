const express = require("express");
const router = express.Router();
var bodyParser = require('body-parser')
 const axios = require('axios');

const APIS = require('./API.js')
router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())
router.get('/', (req, res, next) => {
    let _items =[
        {
            name:"john",
            age:"18"
        },
        {
            name:"john1",
            age:"182"
        },
        {
            name:"john2",
            age:"181"
        },
    ]
	res.render('home',{
        title:"KUY",
        itemsss:_items
    });
});
router.get('/test', (req, res, next) => {
	res.render('kom',{
        title:"KUY"
    });
});

router.get('/wheel', (req, res, next) => {
	res.render('game',{
        title:"KUY"
    });
});
router.post('/api',async (req, res, next) => {
    // console.log(req.body);
    const {name} = req.body;
    if(name =='KUY'){
     let result =  await APIS.getTest();
    return res.json(result);
    }
	return res.json({msg:"fuck"});
});
module.exports= router;