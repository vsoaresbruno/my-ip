var http = require("http");

var req = http.get('http://www.meuip.com/api/meuip.php', (res) => {
  res.on('data', function (chunk) {
    console.log('Your IP: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
