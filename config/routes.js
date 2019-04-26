/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'test' },
  // round default
  '/': 'ProductsController.list',
  //round admincp
  'get /admincp/product/list': 'admincp/ProductController.list',
  //'get /admincp/product/list/page/:id': 'admincp/ProductController.list',
  'get /admincp/product/form': 'admincp/ProductController.form',
  'post /admincp/product/add': 'admincp/ProductController.add',
  'get /admincp/product/edit/:id': 'admincp/ProductController.edit',
  //round site
  'get /product/allproduct': 'ProductController.allproduct',
  'get /product/category': 'ProductController.category',
  'get /product/detail': 'ProductController.detail'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
