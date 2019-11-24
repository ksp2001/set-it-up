const request =  require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const brain = require('brain.js');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

let lang = "ruby"
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

app.get('/', function(req, res){
   res.sendFile('index.html');
});

app.listen(3000);

app.post('/submit-form', (req, res) => {
  lang = req.body.language

let companiesList = []
link_string = "https://ca.indeed.com/jobs?q="+lang+"&l="

request(link_string, (error, response, html)=> {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html)
    $('.company').each((i,el)=> {
      companiesList[i] = {}
      const company_name = $(el).text().trim()
      if (company_name != undefined) {
      companiesList[i]['language'] = lang;
      companiesList[i]['company'] = company_name;
      }
    })
  }
  let json = JSON.stringify(companiesList);
  fs.writeFile("data.json", json, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

  let data = require('./data.json');
  const network = new brain.recurrent.LSTM
  const training_data = data.map(item => ({
  input : item.language,
  output : item.company
}));

network.train (training_data, {iterations:300});

const output = network.run(lang);
res.render('final.ejs', {output:output});
fs.unlinkSync('./data.json');
  });

});
});
