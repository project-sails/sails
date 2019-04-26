/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: function(req, res) {
        
        res.locals.layout = 'admin/main';
        return res.view('admin/product/list', {title: "product/list"})
    },
    form: function(req, res) {
        res.locals.layout = 'admin/main';
        return res.view('admin/product/form', {title: "product/add"})
    },
    add: function(req, res) {
        //create a user
        Product.create({title: req.param("title"),  body: req.param("body")}, function(err, createdData) {
            if(err){
                return res.badRequest({
                            error: err
                        });
                } else {
                return res.json({
                            data : createdData
                });
                }
        });
        return res.json({ quote: req.param("title")});
    },
    edit: function(req, res) {
        
        res.locals.layout = 'admin/main';
        return res.view('admin/product/edit', {title: "product/edit"})
    },

};

