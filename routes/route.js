exports.register = function(req, res){
    console.log('userName-> ' + req.body.userName);
    res.status('201');
}