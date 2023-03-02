const express = require('express')
const app = express()
const cors = require('cors')

//setting
const port = process.env.PORT || 3000;

//midelwers
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

//routes
app.use(require('./routes/index'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/users', require('./routes/users'))

//start server
app.listen(port, () => {
    console.log('Server is running on port 3000');
})


