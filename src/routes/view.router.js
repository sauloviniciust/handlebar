const express = require('express');

const router = express.Router();

let food = [
    { name: 'morango', price: 2.50 },
    { name: 'Banana', price: 1.50 },
    { name: 'Laranja', price: 3.00 },
    { name: 'Pêra', price: 2.00 },
    { name: 'Uva', price: 4.00 }
];
// Define uma rota para a raiz do servidor ('/')
router.get('/', (req, res) => {
    // Ao acessar a rota '/', exibe uma mensagem no console
    console.log('testando....');

    // Define um objeto 'usuarios' com informações (nome e sobrenome)
    let usuarios = {
        name: 'Saulo',
        last_name: '',
        isAdmin: true,
        food: food 
    }
    res.render('index', usuarios);
});

module.exports = router;