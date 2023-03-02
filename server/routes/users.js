
const { Router } = require('express')
const router = Router()

const fetch = require('node-fetch');


router.get('/', async (req, res) => {
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
})

module.exports = router