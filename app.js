const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

// Rutas para operaciones de la calculadora
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) + parseFloat(b);
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) - parseFloat(b);
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) * parseFloat(b);
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (parseFloat(b) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = parseFloat(a) / parseFloat(b);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});

module.exports = app;
