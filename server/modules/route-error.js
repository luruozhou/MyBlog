var RouterError = {
    errorHandler: function(reason, routeSetting, req, res) {
        console.log(reason, routeSetting);
        res.redirect('/login?error=doNotHavePermission')
        // res.render('login',{error:reason})
    }
}

export default RouterError;