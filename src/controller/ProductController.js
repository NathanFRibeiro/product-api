const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

    //// --Sem paginação
    // async index(req, res){
    //     const products = await Product.find();
    //     return res.json(products);
    // },

    async index(req, res){
        // Get page from querystring (ex. ?page=1)
        const { page = 1 } = req.query;

        //params: filter, object with current page and limit
        const products = await Product.paginate({}, {page, limit: 10});
        return res.json(products);
    },

    async store(req,res){
       const product = await Product.create(req.body);
       return res.json(product)
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product)
    },

    async update(req, res){
        //params: id do item atual, conteudo a ser modificado, retornar o item modificado
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product)
    },

    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        return res.send()
    }
}