/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: function(req, res) {
        
        res.locals.layout = 'admin/main';
        return res.view('admin/user/list', {title: "user/list"})
    },
    add: function(req, res) {
        
        res.locals.layout = 'admin/main';
        return res.view('admin/user/add', {title: "user/add"})
    },
    edit: function(req, res) {
        
        res.locals.layout = 'admin/main';
        return res.view('admin/user/edit', {title: "user/edit"})
    },

};

