const http = require('http');
const url = require("url");
//const quotes = require("./quotes")

const quotes = [
    [
        {
            "quote": "Be yourself; everyone else is already taken.",
            "author": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Inspirational",
                "Advice",
                "Humor"
            ]
        },
        {
            "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
            "author": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "Humor"
            ]
        },
        {
            "quote": "True friends stab you in the front.",
            "author": "Oscar Wilde",
            "profession": "Irish poet",
            "topics": [
                "Philosophy",
                "People"
            ]
        },
    ]
]


const hostname = '127.0.0.1';
const port = process.env.port || 3000;

//console.log(quotes)

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');

// });



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const reqUrl = url.parse(req.url).pathname
    if (reqUrl == "/cat") {
        res.write('<h1 style="color: red">Hello Cat API!</h1>');
        res.write('<img src="https://cataas.com/cat" height="250px" />');
        res.end()
    }
    else if (reqUrl == "/quotes") {
        const jsonContent = JSON.stringify(quotes);
        res.end(jsonContent);
    }
    else if (reqUrl == "/random") {
        res.write('<h1 style="color: blue">Hello Random Photo API!</h1>');
        res.write('<img src="https://picsum.photos/200/300" height="250px" />');
        res.end()
    }

    res.end();
    });


server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
     });
