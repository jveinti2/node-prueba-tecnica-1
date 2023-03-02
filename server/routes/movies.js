const { Router } = require('express')
const router = Router()

const movies = require('../sample.json')



router.get('/', (req, res) => {
    res.send(movies)
})
router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body
    if (title && director && year && rating) {
        const newMovie = { id: movies.length + 1, ...req.body }
        movies.push(newMovie)
        res.send(movies)
    } else {
        res.status(500).json({ error: 'There was an error' })
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const newMovies = movies.splice(id, 1)
    res.send(newMovies)
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { title, director, year, rating } = req.body
    if (title && director && year && rating) {
        const newMovie = movies.filter(movie => movie.id == id)
        newMovie[0].title = title
        newMovie[0].director = director
        newMovie[0].year = year
        newMovie[0].rating = rating


        res.send(newMovie);
    } else {
        res.status(500).json({ error: 'There was an error' })
    }
})

module.exports = router