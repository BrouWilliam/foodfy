const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require('./data')

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    return res.render('index', {items: receitas})
})
server.get('/sobre', function(req, res){
    return res.render('sobre')
})
server.get('/receitas', function(req, res){
    return res.render('receitas', {items: receitas})
})
server.get('/receita/:index', function(req,res){
    const receitasData = req.params.index

    if(!receitas[receitasData]){
        res.status(404)
    }
    else{
        return res.render('receita', {items: receitas[receitasData]})
    }
    
    
})

server.use(function (req,res){
    res.status(404).send('not-found')
})


server.listen(5000, function(){
    console.log("server is r");
})