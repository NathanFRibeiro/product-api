const express = require('express');
const routes = express.Router();

const ProductController = require("./controller/ProductController")


routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

    // Product.create({
    //     title: 'React Native',
    //     description:'Build native apps with React',
    //     url:'http://github.com/facebook/react-native'
    // });


module.exports = routes;