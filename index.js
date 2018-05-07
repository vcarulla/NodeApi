'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

app.get('/api/product', (req, res) => {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!products) return res.status(404).send({ message: `No se encontraron coincidencias. ERROR: ${err}` });

        res.status(200).send({ products});
    });
});

app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!product) return res.status(404).send({ message: `No se encontraron coincidencias. ERROR: ${err}` });

        res.status(200).send({ product});

    });
});

app.post('/api/product', (req, res) => {
    console.log(`POST /api/product`);
    console.log(req.body);

    let product = new Product();
    product.name = req.body.name;
    product.name = req.body.name;
    product.price = req.body.price;
    product.picture = req.body.picture;
    product.description = req.body.description;
    product.category = req.body.category;

    product.save( (err, productStored) => {
        if (err) res.status(500).send({ message: `Se produjo un error intentando guardar en la db. ERROR: ${err}` });
        res.status(200).send({ product: productStored });
    });
});

app.put('/api/product/:productId', (req, res) => {
    let productId =  req.params.productId;
    let body = req.body;

    Product.findByIdAndUpdate(productId, body, (err, productUpdated) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!productUpdated) return res.status(404).send({ message: `No se encontraron coincidencias.. ERROR: ${err}` });

        res.status(200).send({ message: `El id: ${productId} fue acctualizado con exito. ${productUpdated}`});

    });
});

app.delete('/api/product/:productId', (req, res) => {
    let productId =  req.params.productId;

    Product.findById(productId, (err, productDeleted) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!productDeleted) return res.status(404).send({ message: `No se encontraron coincidencias.. ERROR: ${err}` });

        product.remove( (err) => {
            if (err) return res.status(500).send({ message: `Se produjo un error intentando borrar en la db. ERROR: ${err}` });
            res.status(200).send({ message: `El id: ${productId} fue eliminado con exito`});
        });


    });

});

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
     return console.error(`Error en la conexión con mongodb.`, `ERROR: ${err}`) ;
    }
    console.info(`Conexión a mongodb establecida correctamente.`);

    app.listen(port, () => {
        console.info(`API REST corriendo en http://localhost:${port}.`);
    });
});

