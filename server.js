const http = require('http');
const { type } = require('os');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/index'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>devifka sayfasina hosgeldiniz Index</h2>");
    }else if(url==='/hakkimda'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>devifka sayfasina hosgeldiniz Hakkimda</h2>");  
    }else if(url==='/iletisim'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>devifka sayfasina hosgeldiniz İletişim</h2>");
    }
    
    res.end(); // sunucu istek-gonderme bitimi
});
const port = 5000;
server.listen(port,()=>{
    console.log(`Sunucu ${port} unda calisiyor`);
});