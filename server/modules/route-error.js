var RouterError = {
    errorHandler: function (reason, routeSetting, req, res) {
        console.log(reason, routeSetting);
        reason = reason || 'doNotHavePermission';
        res.redirect('/login?error=' + reason);
        // res.render('login',{error:reason})
    }
}

export default RouterError;