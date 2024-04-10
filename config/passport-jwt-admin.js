const passport = require('passport');
const JWTStratergy = require('passport-jwt').Strategy;
const JWTExtract = require('passport-jwt').ExtractJwt;
const User = require('../model/user')
require('dotenv').config()

const opts={
    jwtFromRequest: JWTExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

// jwt authentication for user
passport.use("admin-jwt",new JWTStratergy(opts, async (jwt_payload, done)=>{
    try {
        const user = await User.findOne({
            id: jwt_payload.id,
            isAdmin: true
        });
        if(user){
            return done(null, user)
        }else{
            return done(null, false)
        }
    } catch (error) {
        console.log("Internal server error in creating authentication!!", error);
        return done(null, error)
    }
}));