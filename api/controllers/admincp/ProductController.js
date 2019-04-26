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
    add: function(req, res) {
        
        res.locals.layout = 'admin/main';
        return res.view('admin/product/add', {title: "product/add", id: req.param('id')})
    },
    edit: function(req, res) {
        
        res.locals.layout = 'admin/main';
        return res.view('admin/product/edit', {title: "product/edit"})
    },

};

