var RouterError = {
    errorHandler: function(reason, routeSetting, req, res) {
        console.log(reason, routeSetting);
        res.redirect('/login')
    }
}

export default RouterError;