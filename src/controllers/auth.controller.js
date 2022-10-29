
import Jwt from "jsonwebtoken";
import { config } from "dotenv";
config({ path: process.ENV });

export const login = (req, res) => {
    const user = {
        id:1,
        nombre:"Fredys",
        email:"prueba@gmail.com"
    }

    Jwt.sign({user},process.env.KEYSECRET, { expiresIn: '1m' }, (error, token) => {
        res.json({
          token: token,
          mensaje: "Respondiendo desde login",
          data: user,
        });
    });

}


export const verifyToken = (req, res, next) => {

    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
      res.sendStatus(403);
    }

    /* res.json({
        'mensaje':"Función para verificar token"
    }) */
}