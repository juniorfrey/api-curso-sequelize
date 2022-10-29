
import Jwt from "jsonwebtoken";
import { config } from "dotenv";
import Bcrypt from  "bcrypt";
config({ path: process.ENV });


//modelos
import { Auth } from "../models/Auth.js";

const saltRounds = 10;

export const login = async(req, res) => {

    const user = req.body;

    const usuario = await Auth.findOne({
        where: {email:req.body.email}
    });

    if(!usuario)
       return res.status(404).json({mensaje:"Usuario no existe"});

    const dcryptPassword = Bcrypt.compareSync(req.body.password, usuario.password);
    if(!dcryptPassword)
        return res.status(404).json({mensaje:"Contraseña invlida"});

    //res.json({data:usuario, password:dcryptPassword })

    Jwt.sign({user},process.env.KEYSECRET, { expiresIn: '1m' }, (error, token) => {
        res.json({
          token: token,
          mensaje: "Respondiendo desde login",
        });
    });

}

export const registro = async(req, res) => {
    const password = req.body.password;

    const usuario = await Auth.findOne({
        where: {email:req.body.email}
    });

    if(usuario)
       return res.status(500).json({mensaje:"Este correo ya se encuentra en uso"});

    const encryptedPassword = await Bcrypt.hash(password, saltRounds);
    try {
        const nuevoUsuario = await Auth.create({email:req.body.email, password:encryptedPassword});
        res.json({usuario: nuevoUsuario});
    } catch (error) {
        return res.status(500).json({ mensaje: error.message, error:"error" });
    }
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