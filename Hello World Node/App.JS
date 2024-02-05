//Código HelloWorld para aplicações em 

//Nosso protocolo vai ser http
const http = require('http');

//Configuração das portas que iremos utilizar
const hostname = "127.0.0.1";
const port = 3000;

//configura o servidor que estamos subindo na máquina
const server = http.createServer((req, res) => {
    res.statusCode = 200; //status code de sucesso
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

//Para conseguir visualizar no navegador, usa-se o método listen
server.listen(port, hostname, () => {
    console.log('Server runnig at http://' + hostname + ':' + port); //console log não trouxe as portas, mas o server foi criado
});
