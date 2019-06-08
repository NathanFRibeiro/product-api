const express = require('express');
const routes = express.Router();

const ProductController = require("./controller/ProductController")


routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.destroy);


    // Product.create({
    //     title: 'React Native',
    //     description:'Build native apps with React',
    //     url:'http://github.com/facebook/react-native'
    // });


module.exports = routes;