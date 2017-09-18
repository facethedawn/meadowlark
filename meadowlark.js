var express = require('express')
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' })
var fortune = require('./lib/fortune.js')


var app = express()

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'))

app.set('port', process.env.PORT || 3000)


app.get('/',function(req,res){
  // res.type('text/plain')
  // res.send('Meadowlark Travel')
  res.render('home')
})

app.get('/about',function(req,res){
  res.render('about', { fortune: fortune.getFortune });
})

/* 404 */
app.use(function(req,res){
  // res.type('text/plain')
  res.status(400)
  // res.send('404 not found')
  res.render('404')
})

/* 500 */
app.use(function(req,res){
  // res.type('text/plain')
  res.status(500)
  // res.send('500 server err')
  res.render(500)
})

app.listen(app.get('port'),function(){
  console.log( 'Express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
})


