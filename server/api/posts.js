const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get posts
router.get('/', async (req, res) =>{

    const posts = await loadpostscollection();
    res.send(await posts.find({}).toArray());
});

//add posts
router.post('/', async (req,res) =>{
    const posts = await loadpostscollection();

    await  posts.insertOne({
        topic: req.body.topic,
        price: req.body.price,
        location: req.body.location,
        provider: req.body. provider,
        createdAt: new Date()
    });
    res.status(201).send();

});



//Update Post
router.put('/:id', async (req, res) => {
    const posts = await loadpostscollection();
    var update = { $set: {topic: req.body.updatedText, price: req.body.updatePrice, location: req.body.updateLocation, provider: req.body.updateProvider, createdAt: new Date()}};
    await posts.updateOne({_id: new mongodb.ObjectID(req.params.id)}, update, function(err, res){
        if (err) throw err;
        console.log("Successfully updated");
    });
    res.status(200).send();
});




async  function loadpostscollection() {

    const client = await mongodb.MongoClient.connect

    (`mongodb+srv://isaac:isaac@cluster0-mazyf.mongodb.net/test?retryWrites=true&w=majority`,{
        useNewUrlparser: true

    });

    return client.db('studentdb').collection('course');


}

module.exports = router;
