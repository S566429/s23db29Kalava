var icecream = require('../models/icecream');
// List of all icecream
exports.icecream_list = function(req, res) {
res.send('NOT IMPLEMENTED: icecream list');
};
// for a specific icecream.
exports.icecream_detail = function(req, res) {
res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};
// Handle icecream create on POST.
exports.icecream_create_post = async function(req, res) {
res.send('NOT IMPLEMENTED: icecream create POST');
console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"icecream_type":"goat", "cost":12, "size":"large"}
    document.icecream_flavour = req.body.icecream_flavour
    document.icecream_quantity = req.body.icecream_quantity;
    document.icecream_cost = req.body.icecream_cost;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle icecream delete form on DELETE.
exports.icecream_delete = function(req, res) {
res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
// Handle icecream update form on PUT.
exports.icecream_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};

exports.icecream_list = async function(req, res) {
    try{
    icecream = await icecream.find();
    res.send(icecream);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };   

// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function(req, res) {
    try{
    icecream = await icecream.find();
    res.render('icecream', { title: 'icecream Search Results', results: icecream });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };






