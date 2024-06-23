import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import express from "express";

const app = express();
app.use(cookieParser());

const requireAuth = (req, res, next) => {

    const token = req.cookies.token;

    console.log("token from cookies: ", token);
    // console.log("Token:", headers.Authorization.split("Bearer ")[1]);

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (err) {
                console.log("it is an error")
                console.log(err.message);
                res.redirect("/login");
            }
            else {
                console.log("error nahi hai")
                req.user = decodedToken;
                console.log(decodedToken)
                next();
            }
        })
    }
    else {
        res.status(401).send("Unauthorized");
        res.redirect('/login');
    }

}

export { requireAuth };