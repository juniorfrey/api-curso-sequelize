import { Proyecto } from "../models/Proyecto.js";

export const getProyectos = async(req, res) => {

    try {
        const proyectos = await Proyecto.findAll();
        res.json(proyectos);
    } catch (error) {
        return res.status(500).json({mensaje:error.message});
    }

}

export const crearProyecto = async(req, res) => {


    try {
        const { nombre, prioridad, descripcion } = req.body;
        const nuevoProyecto = await Proyecto.create({
            nombre,
            prioridad,
            descripcion,
        });

        res.json(nuevoProyecto);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }

   
};  