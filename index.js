const http = require('http');
const fs = require('fs');
const porta = 443

const server = http.createServer((req, res) => {
  fs.readFile('site.html', (erro, arquivo) => {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    res.write(arquivo)
    res.end()
  })
})

server.listen(porta, () => {
  console.log('Servidor Rodando')
})