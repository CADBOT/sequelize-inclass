var express = require('express')
var app = express()
var config = require('./config')
console.log(config)
var DB = config.DB
var PORT = config.PORT
var models = require('./models')

app.get('/route', function(req, res) {
  res.json({hello: 'how are you'})
})

app.get('/cats', function(req, res) {
  res.json([
    'meow', 'meow2'
  ])
})


models.sequelize.sync().then(function(x) {
  console.log(x)
  app.listen(PORT, function() {
  console.log('server started')
  console.log('listening on PORT: ' + PORT)
  console.log('DB URI STRING: ' + DB)
  })
})




