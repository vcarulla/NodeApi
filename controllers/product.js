'use strict';

const Product = require('../models/product');

function getProducts(req, res) {
    console.log(`GET '/api/product'`);

    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!products) return res.status(404).send({ message: `No se encontraron coincidencias. ERROR: ${err}` });

        res.status(200).send({ products });
    });
}

function getProduct(req, res) {
    console.log(`GET '/api/product/${req.params.productId}'`);

    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!product) return res.status(404).send({ message: `No se encontraron coincidencias. ERROR: ${err}` });

        res.status(200).send({ product });

    });
}

function updateProduct(req, res) {
    console.log(`PUT '/api/product/${req.params.productId}'`);

    let productId =  req.params.productId;
    let body = req.body;

    Product.findByIdAndUpdate(productId, body, (err, productUpdated) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!productUpdated) return res.status(404).send({ message: `No se encontraron coincidencias. ERROR: ${err}` });

        res.status(200).send({ message: `El id: ${productId} fue actualizado con éxito. ${productUpdated}`});
    });
}

function deleteProduct(req, res) {
    console.log(`DELETE '/api/product/${req.params.productId}'`);

    let productId =  req.params.productId;

    Product.findById(productId, (err, productDeleted) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!productDeleted) return res.status(404).send({ message: `No se encontraron coincidencias.. ERROR: ${err}` });

        productDeleted.remove( err => {
            if (err) return res.status(500).send({ message: `Se produjo un error intentando borrar en la db. ERROR: ${err}` });
            res.status(200).send({ message: `El id: ${productId} fue eliminado con éxito`});
        });
    });
}

function saveProduct(req, res) {
    console.log(`POST '/api/product': \n`, req.body);

    const product = new Product();
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
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
};