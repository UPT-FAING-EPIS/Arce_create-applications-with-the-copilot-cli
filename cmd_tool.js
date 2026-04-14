#!/usr/bin/env node

/**
 * Este archivo simula el resultado de haber usado Copilot en la terminal
 * (GitHub Copilot CLI) con el comando `gh copilot suggest`
 */

console.log("Aplicación de consola creada con la ayuda de Copilot CLI.");
console.log("Comando utilizado:");
console.log("  => gh copilot suggest -t shell 'crear servidor estatico rapido'");

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor generado por CLI!\n');
});

server.listen(8080, () => {
    console.log('Servidor escuchando en puerto 8080');
});