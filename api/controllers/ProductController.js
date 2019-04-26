/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    allproduct: function(req, res) {
        
        res.locals.layout = 'site/main';
        return res.view('site/product/allproduct', {title: "allproduct"})
    },
    category: function(req, res) {
        
        res.locals.layout = 'site/main';
        return res.view('site/product/category', {title: "category"})
    },
    detail: function(req, res) {
        
        res.locals.layout = 'site/main';
        return res.view('site/product/detail', {title: "detail"})
    },

};

