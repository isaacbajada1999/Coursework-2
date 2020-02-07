const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get users
router.get('/', async (req, res) =>{

    const users = await loaduserscollection();
    res.send(await users.find({}).toArray());
});

//create user
router.post('/', async (req,res) =>{
    const users = await loaduserscollection();
    await users.insertOne({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        user_type: req.body.user_type,

    });



    res.status(201).send();

});

async  function loaduserscollection() {

    const client = await mongodb.MongoClient.connect

    (`mongodb+srv://isaac:isaac@cluster0-mazyf.mongodb.net/test?retryWrites=true&w=majority`,{
        useNewUrlparser: true

    });


    return client.db('studentdb').collection('profile');


}


module.exports = router;
