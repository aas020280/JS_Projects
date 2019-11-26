const http = require('http');
const port = 5000

function createTable(rows) {
    var blocks = [];
    for (i = 0; i < rows; i++) {
        blocks.push(`<tr><td>${i}</td></tr>`)
    }
    return "<table>" + blocks.join("\n") + "</table>"
}
var server = http.createServer(function(req, res){
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let studentLink = `<p><a href="/student">Students</a></p>`;
        let table = createTable(5);
        res.write(`<html><body><p>This is home Page.</p>${studentLink}${table}</body></html>`);
        res.end();
    }
    else if (req.url == "/student") {

        res.writeHead(200, {'Content-Tent': 'text/html'});
        res.write('<html><body><p>This is home student Page</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin") {

        res.writeHead(200, {'Content-Tent': 'text/html'});
        res.write('<html><body><p>This is home admin Page</p></body></html>');
        res.end();
    }
    else {
        res.statusCode = 404;
        res.end('Bad Request!');
    }
});
server.listen(port, function(err) {
    if (err) {
        return console.log('something bad happend', err)
    }

    console.log(`server is listening on ${port}`)
});