// Imports 
const express = require ('express')

// Instantiate serveur
const server = express()

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html')
    res.status(200).send('<h1> Bonjour, voici notre projet</h1>')
})

// launch server
server.listen(8080, function() {
    console.log('serveur lancé')
})