var passport =require("passport");
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'maba';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    return  done(null,jwt_payload);
}));

module.exports=passport;