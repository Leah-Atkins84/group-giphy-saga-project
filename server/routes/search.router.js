const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}`)
    
    .then(response => res.send(response.data))
    .catch(error => {
        console.log('error is', error);    
        res.sendStatus(500)
    });
})


module.exports = router;